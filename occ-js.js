/*EvaluationKIT START*/ var evalkit_jshosted = document.createElement('script')
evalkit_jshosted.setAttribute('defer', 'defer')
evalkit_jshosted.setAttribute('type', 'text/javascript')
evalkit_jshosted.setAttribute(
  'src',
  'https://ocean.evaluationkit.com/canvas/js'
)
document
  .getElementsByTagName('head')[0]
  .appendChild(evalkit_jshosted) /*EvaluationKIT END*/
window.ALLY_CFG = {
  baseUrl: 'https://prod.ally.ac',
  clientId: 9686,
}
$.getScript(ALLY_CFG.baseUrl + '/integration/canvas/ally.js')
////////////////////////////////////////////////////
// DESIGNPLUS CONFIG                            //
////////////////////////////////////////////////////
DpPrimary = {
  lms: 'canvas',
  templateCourse: '53034',
  hideButton: true,
  enableWizard: false,
  hideLti: false,
  extendedCourse: '', // added in sub-account theme
  sharedCourse: '', // added from localStorage
  courseFormats: [],
  canvasRoles: [],
  canvasUsers: [],
  canvasCourseIds: [],
  plugins: [],
  excludedModules: [],
  includedModules: [],
  lang: 'en',
}

// merge with extended/shared customizations config
DpConfig = { ...DpPrimary, ...(window.DpConfig ?? {}) }

$(function () {
  const uriPrefix = location.href.includes('.beta.') ? 'beta.' : ''
  const toolsUri = DpConfig.toolsUri
    ? DpConfig.toolsUri
    : `https://${uriPrefix}designplus.ciditools.com/`
  $.getScript(`${toolsUri}js/controller.js`)
})
////////////////////////////////////////////////////
// END DESIGNPLUS CONFIG                        //
////////////////////////////////////////////////////
