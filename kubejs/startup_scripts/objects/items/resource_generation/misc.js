StartupEvents.registry('item', (event) => {
    
    // === Spores ===
    event.create('compressed_mycelium').texture('kubejs:item/resource_gen/misc/compressed_mycelium');

    event.create('smoked_mycelium').texture('kubejs:item/resource_gen/misc/smoked_mycelium');

    event.create('mycelium_growth').texture('kubejs:item/resource_gen/misc/mycelium_growth');

    event.create('ripened_spores').texture(`kubejs:item/hm/pre-lv/ripened_spores`);

    // === Ore Chunks ===
    [
        { type: 'hematite', composition: 'Fe₂O₃' },
        { type: 'cassiterite', composition: 'SnO₂' },
        { type: 'chalcopyrite', composition: 'CuFeS₂' },
        { type: 'sphalerite', composition: 'ZnS' },
        { type: 'pyrite', composition: 'FeS₂' },
        { type: 'magnetite', composition: 'Fe₃O₄' },
        { type: 'chalcocite', composition: 'Cu₂S' },
    ].forEach((ore) => {
        const { type, composition } = ore;
        let id = `${type}_crushed_ore_chunk`;

        event.create(id).tooltip(`§e${composition}`).texture(`kubejs:item/hm/pre-lv/${id}`);
    });

    // === Plant ===
    event.create('bark').texture(`kubejs:item/hm/pre-lv/bark`);

    event.create('straw').texture(`kubejs:item/hm/pre-lv/straw`);

    event.create('plant_fibers').texture(`kubejs:item/hm/pre-lv/plant_fibers`);

});
