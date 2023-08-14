import { ThemedTitleV2 } from "@refinedev/mui";

export const Title = ({ collapsed }: { collapsed: boolean }) => {
  return <ThemedTitleV2
    // collapsed is a boolean value that indicates whether the <Sidebar> is collapsed or not
    collapsed={collapsed}
    text="My Project"
  />
}
