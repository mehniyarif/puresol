import PuresolIcon from "@/components/puresol-icon";
import PuresolText from "@/components/puresol-text";
import PuresolTextBox from "@/components/puresol-textbox";
import PuresolCalender from "@/components/puresol-calender";
import PuresolCheckbox from "@/components/puresol-checkbox";
import PuresolSmartDll from "@/components/puresol-smart_ddl";

export const registerComponents = {
  install(app) {
    app.component("puresol-icon", PuresolIcon);
    app.component("puresol-text", PuresolText);
    app.component("puresol-textbox", PuresolTextBox);
    app.component("puresol-calendar", PuresolCalender);
    app.component("puresol-checkbox", PuresolCheckbox);
    app.component("puresol-smart_ddl", PuresolSmartDll);
  },
};
