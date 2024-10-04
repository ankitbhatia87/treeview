import styles from './sidebar.module.css'
import SidebarNode from "./SidebarNode"

interface treeData {
  id: number
  label: string
  link: string
}

interface nestedTreeData extends treeData {
  children?: Array<treeData>
}

interface SidebarProps {
  data: Array<nestedTreeData> | undefined
}

const Sidebar = (props: SidebarProps) => {
  const {data} = props;
  console.log({data})
  return (
    <ul className={styles.sidebar}>
      {
        (data || []).map((nodeData: nestedTreeData) => (
          <SidebarNode data={nodeData} />
        ))
      }
    </ul>
  )
}

export default Sidebar