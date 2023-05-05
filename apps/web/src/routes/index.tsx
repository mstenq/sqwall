import { ChevronDown } from "@/icons/DownChevron";
import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Accordion, Button } from "sqwall";

export default component$(() => {
  return (
    <div class="mx-auto max-w-[600px]">
      <div class="flex gap-2">
        <Button>Primary</Button>
        <Button variant="secondary">
          Secondary
          <ChevronDown q:slot="endIcon" class="h-5 w-5" />
        </Button>
      </div>

      <Accordion class="mb-8 mt-2">
        <Accordion.Item>
          <div q:slot="summary">Accordion 1</div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, eveniet ex minima blanditiis et numquam
          excepturi rerum consequuntur esse fugiat, omnis distinctio delectus assumenda accusantium ipsum modi aperiam,
          hic doloribus?
        </Accordion.Item>
        <Accordion.Item>
          <div q:slot="summary">Accordion 1</div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, eveniet ex minima blanditiis et numquam
          excepturi rerum consequuntur esse fugiat, omnis distinctio delectus assumenda accusantium ipsum modi aperiam,
          hic doloribus?
        </Accordion.Item>
      </Accordion>

      <Accordion type="single" class="mb-8 mt-2" variant="baseLarge">
        <Accordion.Item>
          <div q:slot="summary">Accordion 1</div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, eveniet ex minima blanditiis et numquam
          excepturi rerum consequuntur esse fugiat, omnis distinctio delectus assumenda accusantium ipsum modi aperiam,
          hic doloribus?
        </Accordion.Item>
        <Accordion.Item>
          <div q:slot="summary">Accordion 1</div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, eveniet ex minima blanditiis et numquam
          excepturi rerum consequuntur esse fugiat, omnis distinctio delectus assumenda accusantium ipsum modi aperiam,
          hic doloribus?
        </Accordion.Item>
      </Accordion>

      <Accordion type="single" class="mb-8 mt-2" variant={["basic"]} wrapFocus={false}>
        <Accordion.Item>
          <div q:slot="summary">Accordion 1</div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, eveniet ex minima blanditiis et numquam
          excepturi rerum consequuntur esse fugiat, omnis distinctio delectus assumenda accusantium ipsum modi aperiam,
          hic doloribus?
        </Accordion.Item>
        <Accordion.Item>
          <div q:slot="summary">Accordion 1</div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, eveniet ex minima blanditiis et numquam
          excepturi rerum consequuntur esse fugiat, omnis distinctio delectus assumenda accusantium ipsum modi aperiam,
          hic doloribus?
        </Accordion.Item>
        <Accordion.Item>
          <div q:slot="summary">Accordion 1</div>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus, eveniet ex minima blanditiis et numquam
          excepturi rerum consequuntur esse fugiat, omnis distinctio delectus assumenda accusantium ipsum modi aperiam,
          hic doloribus?
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
