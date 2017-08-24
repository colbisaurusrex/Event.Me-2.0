import { configure } from '@storybook/react'

function loadStories() {
    require('../stories/event.js')
    require('../stories/user.js')
}

configure(loadStories, module);
