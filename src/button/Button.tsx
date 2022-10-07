import { defineComponent, PropType } from "vue";
import type { ButtonType, ButtonSize } from "./types";

export default defineComponent({
  name: "KunButton",

  props: {
    type: {
      type: String as PropType<ButtonType>,
      default: "default",
    },

    size: {
      type: String as PropType<ButtonSize>,
      default: 'medium',
    },

    icon: {
      type: String,
      default: ''
    },

    round: {
      type: Boolean,
      default: false
    },

    plain: {
      type: Boolean,
      default: false
    }
  },

  emits: ['click'],

  setup(props, { slots, emit }) {
    const colors: Record<ButtonType, string> = {
      default: 'gray',
      primary: 'blue',
      success: 'green',
      warn: 'yellow',
      error: 'red'
    };

    const sizeMap: Record<ButtonSize, any> = {
      small: {
        x: 2, y: 1, text: 'sm'
      },
      medium: {
        x: 3, y: 1.5, text: 'base'
      },
      large: {
        x: 4, y: 2, text: 'lg'
      }
    }

    return () => {
      const { type, size, plain } = props;
      const color = colors[type];
      const sizeItem = sizeMap[size];

      return (
        <button
          class={`
            py-${sizeItem.y}
            px-${sizeItem.x}
            ${props.round ? 'rounded-full' : 'rounded-md'}
            bg-${color}-${ plain ? '100' : '500' }
            text-${ plain ? color + '-500' : 'white' }
            hover:text-white
            hover:bg-${color}-700
            border
            border-solid
            border-${color}-500
            hover:border-${color}-700
            cursor-pointer
            transition
          `}
          onClick={() => emit('click')}
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
