
///////////////// TINKERS ///////////////////////
////CASTING TABLE////
global.casingTable = (event, cast, consumed, outputItem, inputFluid, amount, cooling, ID) => {
	event.custom({
	  type: 'tconstruct:casting_table',
	  cast: {
		tag: cast
	  },
	  cast_consumed: consumed,
	  fluid: {
		tag: inputFluid,
		amount: amount
	  },
	  result: outputItem,
	  cooling_time: cooling
  }).id(ID)}

  ////CASTING BASIN////
global.casingBasin = (event, outputItem, inputFluid, amount, cooling, ID) => {
  event.custom({
	type: 'tconstruct:casting_basin',
	fluid: {
	  tag: inputFluid,
	  amount: amount
	},
	result: outputItem,
	cooling_time: cooling
}).id(ID)}

////CASTING BASIN WITH CAST////
global.casingBasinCast = (event, cast, consumed, outputItem, inputFluid, amount, cooling, ID) => {
event.custom({
  type: 'tconstruct:casting_basin',
  cast: {
	tag: cast
  },
  cast_consumed: consumed,
  fluid: {
	tag: inputFluid,
	amount: amount
  },
  result: outputItem,
  cooling_time: cooling
}).id(ID)}

//////// ORE MELTING /////////
global.tinkersOreMelting = (event, outputFluid, amount, byproductFluid, byproductAmount, inputItem, temperature, time, ID) => {
	event.custom({
		type: 'tconstruct:ore_melting',
		rate: 'metal',
		ingredient: {
			tag: inputItem
		},
		result: {
		  fluid: outputFluid, 
		  amount: amount //180
		},
		temperature: temperature, //700
		time: time, //142
		byproducts: [
		  {
			fluid: byproductFluid,
			amount: byproductAmount
		  }
		]
	  
}).id(ID)}
///////////////////////////////////////////////////////////


///////////////// CREATE ADDITIONS ///////////////////////
	////ROLLING////
	global.createRolling = (event, outputItem, amount, inputItem, ID) => {
		event.custom({
			type: 'createaddition:rolling',
		input: {
			  tag: inputItem
		},
		result: 
		Item.of(outputItem, amount)
		
	}).id(ID)}
	///////////////////////////////////////////////////////////

///////////////// THERMAL ///////////////////////
	////ROLLING////
	global.thermalChilling = (event, fluid, fluidAmount, outputItem, amount, cast, energy, ID) => {
		event.custom({
		type: 'thermal:chiller',
		ingredients: [
		  {
			fluid_tag: fluid,
			amount: fluidAmount
		  },
		  {
			item: cast
		  }
		],
		result: 
		Item.of(outputItem, amount),

		energy: energy
		
	}).id(ID)}
///////////////////////////////////////////////////////////
///////////////// COMPACT CRAFTING ///////////////////////
	global.compactCrafting = (event, output, amount, catalyst, size, layers, components, ID) => {
		event.custom({
			type: 'compactcrafting:miniaturization',
			recipeSize: size,
			layers: layers,
			catalyst: {
				id: catalyst,
				Count: 1
			},
			components: components,
			outputs: [{
				id: output,
				Count: amount
			  }]
		  }).id(ID)}
///////////////////////////////////////////////////////////