ItemEvents.modification((event) => {
    event.modify('minecraft:cocoa_beans', (item) => {
        item.overrideFood((food) => {
            food.hunger(1);
            food.saturation(1);
            food.effect('minecraft:slowness', 80, 2, 1);
            food.effect('minecraft:blindness', 10, 1, 0.25);
            food.fastToEat(true);
        });
    });
});
