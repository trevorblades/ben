import { type ActionReturnType, actions, isInputError } from "astro:actions";
import { useState } from "react";
import { Input } from "./Input";
import { Select } from "./Select";

export const ContactForm: React.FC = () => {
  const [result, setResult] =
    useState<ActionReturnType<typeof actions.email.send>>();
  const [isLoading, setIsLoading] = useState(false);

  if (result && !result.error) {
    return (
      <div className="p-10 text-center">
        <p className="text-lg">
          Success! We've recieved your submission and will be in touch soon.
        </p>
      </div>
    );
  }

  const inputError = isInputError(result?.error)
    ? result.error.fields
    : undefined;

  return (
    <form
      className="space-y-6 p-4 md:space-y-8 md:p-6"
      onSubmit={async (event) => {
        event.preventDefault();

        setIsLoading(true);

        const formData = new FormData(event.currentTarget);
        setResult(await actions.email.send(formData));
        setIsLoading(false);
      }}
    >
      <div className="grid gap-x-4 gap-y-6 md:grid-cols-2">
        <Input
          required
          label="First name"
          name="first"
          errors={inputError?.first}
        />
        <Input
          required
          label="Last name"
          name="last"
          errors={inputError?.last}
        />
        <Input
          required
          label="Email"
          type="email"
          name="email"
          errors={inputError?.email}
        />
        <Input
          required
          label="Phone"
          type="tel"
          name="phone"
          errors={inputError?.phone}
        />
        <Input
          required
          label="Company name"
          name="company"
          errors={inputError?.company}
        />
        <Input
          required
          label="Role"
          name="role"
          placeholder="Team lead, supervisor, manager, etc."
          errors={inputError?.role}
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
        <input className="hidden" name="mobile" type="text" />
      </div>
      <button
        disabled={isLoading}
        className="btn-lg w-full btn-primary btn"
        type="submit"
      >
        {isLoading ? "Submitting..." : "Submit"}
      </button>
    </form>
  );
};
