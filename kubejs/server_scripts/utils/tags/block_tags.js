ServerEvents.tags('block', (event) => {

    // event.add('minecraft:mineable/pickaxe', /xtonesreworked:glaxx_block_.*/);

    const targets = [
        /^laserio:.*/,
        /^create:.*/,
        /^pipez:.*/,
        /^kubejs:.*/,
        // /^thermal:.*/,
        /^modularrouters:.*/,
        /^trashcans:.*/,
    ];
    targets.forEach((target) => event.add('forge:mineable/wrench', target));

    event.remove('mineable/pickaxe', ['gtceu:ulv_barrel']);

    event.add('mineable/axe', ['gtceu:ulv_barrel']);

    event.add('mineable/pickaxe', ['travelanchors:travel_anchor']);

});