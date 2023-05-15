import Custom from "./Custom";
import { Form } from "./Form";
import { FormLocalAction } from "./FormLocalAction";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Custom />
      <Form />
      <FormLocalAction />
    </main>
  );
}
