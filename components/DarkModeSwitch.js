import { useColorMode, Switch, FormLabel } from "@chakra-ui/core";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <>
      <FormLabel htmlFor="color-mode-switch">Toggle color mode</FormLabel>
      <Switch
        id="color-mode-switch"
        position="fixed"
        top="1rem"
        right="1rem"
        color="green"
        isChecked={isDark}
        onChange={toggleColorMode}
      />
    </>
  );
};
