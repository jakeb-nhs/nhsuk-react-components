import React from "react";
import { BaseIconSVGProps, BaseIconSVG } from "../BaseIcon";

export const ArrowLeft: React.FC<BaseIconSVGProps> = (props) => (
    <BaseIconSVG iconType="nhsuk-icon__arrow-left" {...props}>
      <path d="M4.1 12.3l2.7 3c.2.2.5.2.7 0 .1-.1.1-.2.1-.3v-2h11c.6 0 1-.4 1-1s-.4-1-1-1h-11V9c0-.2-.1-.4-.3-.5h-.2c-.1 0-.3.1-.4.2l-2.7 3c0 .2 0 .4.1.6z" />
    </BaseIconSVG>
  );