import { component$ } from "@builder.io/qwik";
import { Accordion } from "../components";

export default component$(() => {
  return (
    <div class="mx-auto max-w-[600px]">
      <Accordion class="m-8">
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
