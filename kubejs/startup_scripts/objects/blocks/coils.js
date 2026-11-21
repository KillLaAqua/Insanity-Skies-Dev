StartupEvents.registry('block', (event) => {

    event //Kept as a dummy example
        .create('abyssal_alloy_coil_block', 'gtceu:coil')
        .temperature(18888)
        .level(40)
        .energyDiscount(20)
        .tier(10)
        .coilMaterial(() => GTMaterials.get('abyssal_alloy'))
        .hardness(5)
        .soundType('metal')
        .requiresTool(true)
        .noValidSpawns(true);

});
