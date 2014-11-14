# https://github.com/gadicc/meteor-famous-views/issues/89
@CLICK_EVT = unless window.ontouchstart is undefined \
  then 'touchstart' else 'click'

FView.ready ->
	if (slidedeck.impress)
		FView.attrEvalAllowedKeys = ["transform"];
		FView.mainCtx.setPerspective 1000

	View = famous.core.View
	StateModifier = famous.modifiers.StateModifier
	Surface = famous.core.Surface

	class Impress extends StateModifier
	  constructor: (options) ->
	    options.size = [400, 300]
	    options.origin = [.5, .5]
	    options.align = [.5, .5]
	    # transform from template
	    super(options)

	FView.registerModifier 'Impress', Impress