import React, { useState } from "react"
import Sidebar from ".."
import { ChevronIcon } from "../../../assets/icons"
import styles from './sidebarnode.module.css'

interface treeData {
  id: number
  label: string
  link: string
}

interface nestedTreeData extends treeData {
  children?: Array<treeData>
}

interface SidebarNodeProps {
  data: nestedTreeData
}

const SidebarNode = (props: SidebarNodeProps) => {
  const {data} = props || []
  const [isChildVisible, setIsChildVisible] = useState<boolean>(false)

  const hasChildren = data.children ? true : false

  const handleToggle = () => {
    setIsChildVisible(!isChildVisible)
  }

  return (
    <>
      <li className={styles.listitem}>
        {hasChildren && <div onClick={handleToggle} className={`${isChildVisible ? styles.downarrow : null}`}><ChevronIcon /></div>}
        <a className={`${!hasChildren ? styles.nochild : null}`} href={data.link}>{data.label}</a>
      </li>
      {
        hasChildren && isChildVisible &&
        <Sidebar data={data.children} />
      }
    </>
  )
}

export default React.memo(SidebarNode)