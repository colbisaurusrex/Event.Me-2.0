import { configure } from '@storybook/react'

function loadStories() {
    require('../stories/event.js')
    require('../stories/user.js')
    require('../stories/grid.js')
}

configure(loadStories, module);
