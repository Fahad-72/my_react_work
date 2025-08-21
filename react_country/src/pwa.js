import { registerSW } from 'virtual:pwa-register'


export const startPWA = () => {
const updateSW = registerSW({
immediate: true,
onNeedRefresh() {
const doUpdate = confirm('New version available. Update now?')
if (doUpdate) updateSW()
},
onOfflineReady() {
console.log('App ready to work offline')
},
})
}