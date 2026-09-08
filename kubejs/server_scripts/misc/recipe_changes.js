ServerEvents.recipes((event) => {
    const id = global.id;

    event.replaceInput(
        { id: 'gtceu:macerator/macerate_nether_star_lens' },
        '#forge:lenses/white',
        'gtceu:nether_star_lens'
    );

    //Treated Wood Fixes/Additions
    event.remove({ id: 'gtceu:macerator/macerate_treated_wood_chest_boat' });
    event.recipes.gtceu
        .macerator(id('treated_wood_chest_boat'))
        .itemInputs('gtceu:treated_wood_chest_boat')
        .itemOutputs('5x gtceu:treated_wood_dust', '8x gtceu:wood_dust')
        .duration(1274)
        .EUt(2);
    event.remove({ id: 'gtceu:macerator/macerate_treated_wood_planks' });
    event.recipes.gtceu
        .macerator(id('treated_wood_planks'))
        .itemInputs('gtceu:treated_wood_planks')
        .itemOutputs('gtceu:treated_wood_dust')
        .duration(98)
        .EUt(2);
    event.recipes.create
        .filling('gtceu:treated_wood_planks', [Fluid.of('gtceu:creosote', 125), '#minecraft:planks'])
        .id('insanity_skies:filling/treated_wood_planks');

    //certus fixes
    [
        { name: `exquisite_certus_quartz_gem`, dustCount: 4 },
        { name: `flawless_certus_quartz_gem`, dustCount: 2 },
    ].forEach((item) => {
        event.remove({ input: `gtceu:${item.name}`, type: `gtceu:macerator` });

        event.recipes.gtceu
            .macerator(id(`macerate_${item.name}`))
            .itemInputs(`gtceu:${item.name}`)
            .itemOutputs(`${item.dustCount}x gtceu:certus_quartz_dust`)
            .duration(item.dustCount * 20)
            .EUt(2)
            .category(GTRecipeCategories.MACERATOR_RECYCLING);
    });

});
