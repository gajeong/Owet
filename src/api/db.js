import axios from 'axios'

export default class DB {
  constructor() {}
  async fetchSidebarMenus() {
    return await axios.get('/data/sidebar-menu.json').then((res) => res.data)
  }
}
