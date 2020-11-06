import { useColorMode, Switch, FormLabel, Flex } from "@chakra-ui/core";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <Switch
      position="fixed"
      top="1rem"
      right="1rem"
      aria-label="theme switch"
      id="chakra-switch"
      color="green"
      isChecked={isDark}
      onChange={toggleColorMode}
    />
  );
};
