ServerEvents.tags('block', (event) => {

    const targets = [
        /^laserio:.*/,
        /^create:.*/,
        /^pipez:.*/,
        /^kubejs:.*/,
        /^modularrouters:.*/,
        /^trashcans:.*/,
    ];
    targets.forEach((target) => event.add('forge:mineable/wrench', target));

    event.remove('mineable/pickaxe', ['gtceu:ulv_barrel']);

    event.add('mineable/axe', ['gtceu:ulv_barrel']);

    event.add('mineable/pickaxe', ['travelanchors:travel_anchor']);

});