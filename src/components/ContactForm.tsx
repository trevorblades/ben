import { type ActionReturnType, actions } from "astro:actions";
import { useState } from "react";
import { Input } from "./Input";
import { Select } from "./Select";

export const ContactForm: React.FC = () => {
  const [result, setResult] =
    useState<ActionReturnType<typeof actions.sendEmail>>();
  const [isLoading, setIsLoading] = useState(false);

  if (result && !result.error) {
    return (
      <div className="p-8 text-center">
        <p className="text-lg">
          Success! We've recieved your submission and will be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form
      className="space-y-8 p-6"
      onSubmit={async (event) => {
        event.preventDefault();

        setIsLoading(true);

        const formData = new FormData(event.currentTarget);
        setResult(await actions.sendEmail(formData));

        setIsLoading(false);
      }}
    >
      <div className="grid grid-cols-2 gap-4">
        <Input label="First name" required name="first" />
        <Input label="Last name" required name="last" />
        <Input label="Email" required type="email" name="email" />
        <Input label="Phone" required type="tel" name="phone" />
        <Input label="Company name" required name="company" />
        <Input
          required
          label="Role"
          name="role"
          placeholder="Team lead, supervisor, manager, etc."
        />
        <Select
          required
          label="What area do you need help with?"
          name="service"
        >
          <option>Leadership Development</option>
          <option>Executive Coaching</option>
          <option>Team Alignment</option>
          <option>Strategic Planning</option>
          <option>Inclusive Leadership</option>
          <option>The Better Boss</option>
          <option>The Real Strategy</option>
          <option>Small Group Leader Development Program</option>
          <option>DEI</option>
        </Select>
        <Select label="How did you hear about us?" name="source">
          <option value="">Select one...</option>
          <option>Google</option>
          <option>LinkedIn</option>
          <option>Referral</option>
          <option>Participated in one of our programs</option>
          <option>Social media</option>
          <option>Other</option>
        </Select>
      </div>
      <button
        disabled={isLoading}
        className="btn-lg w-full btn-primary btn"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};
