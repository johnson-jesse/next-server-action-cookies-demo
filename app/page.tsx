import Custom from "./Custom";
import { Form } from "./Form";
import { FormCommonAction } from "./FormCommonAction";
import { FormLocalAction } from "./FormLocalAction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between gap-2 p-24">
      <Custom />
      <Form />
      <FormLocalAction />
      <FormCommonAction />
    </main>
  );
}
