import { configure } from '@storybook/react'

function loadStories() {
    require('../stories/index.js')
    require('../stories/event.js')
}

configure(loadStories, module);
