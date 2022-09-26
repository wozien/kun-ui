import { defineComponent, PropType } from "vue";
import "uno.css";

export type KColor = "blue" | "green" | "yellow" | "red" | "gray";

export default defineComponent({
  name: "KunButton",

  props: {
    color: {
      type: String as PropType<KColor>,
      default: "blue",
    },
    icon: {
      type: String,
    },
  },

  setup(props, { slots }) {
    return () => {
      return (
        <button
          class={`
            py-2
            px-4
            font-semibold
            rounded-lg
            shadow-md
            text-white
            bg-${props.color}-500
            hover:bg-${props.color}-700
            border-none
            cursor-pointer
          `}
        >
          {props.icon ? (
            <i class={`i-ic-baseline-${props.icon} p-3`}></i>
          ) : null}
          {slots.default ? slots.default() : ""}
        </button>
      );
    };
  },
});
