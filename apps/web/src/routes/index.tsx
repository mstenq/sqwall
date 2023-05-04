import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Accordion } from "sqwall";

export default component$(() => {
  return (
    <div class="mx-auto max-w-[600px]">
      <Accordion addClass="m-8">
        <Accordion.Item>
          <div q:slot="summary">Accordion 1</div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,
          eveniet ex minima blanditiis et numquam excepturi rerum consequuntur
          esse fugiat, omnis distinctio delectus assumenda accusantium ipsum
          modi aperiam, hic doloribus?
        </Accordion.Item>
        <Accordion.Item>
          <div q:slot="summary">Accordion 1</div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,
          eveniet ex minima blanditiis et numquam excepturi rerum consequuntur
          esse fugiat, omnis distinctio delectus assumenda accusantium ipsum
          modi aperiam, hic doloribus?
        </Accordion.Item>
      </Accordion>

      <Accordion type="single" variant="unstyled">
        <Accordion.Item>
          <div q:slot="summary">Accordion 1</div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,
          eveniet ex minima blanditiis et numquam excepturi rerum consequuntur
          esse fugiat, omnis distinctio delectus assumenda accusantium ipsum
          modi aperiam, hic doloribus?
        </Accordion.Item>
        <Accordion.Item>
          <div q:slot="summary">Accordion 1</div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus,
          eveniet ex minima blanditiis et numquam excepturi rerum consequuntur
          esse fugiat, omnis distinctio delectus assumenda accusantium ipsum
          modi aperiam, hic doloribus?
        </Accordion.Item>
      </Accordion>
    </div>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
