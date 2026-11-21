// priority: 100

// Voltage
const V = (voltage) => {
    return global.v[voltage];
}

const VA = (voltage) => {
    return global.va[voltage];
}

const VH = (voltage) => {
    return global.vh[voltage];
}

const VHA = (voltage) => {
    return global.vha[voltage];
}

/*
    Materials are in-game items or fluids. They can be dusts, ingots, gems, fluids and all their derivatives.
    To make a new material(NOTE: to add a material that is present on the periodic table, but 
        it doesn't have any in-game items/fluids, look below for how to do it),
    write an `event.create()` call in the bellow registering function.
    Write inside the parantheses the name of the material inside '' or "".
    You can change the properties of the material by adding any combination of the following calls:
        .ingot() -> this will make the material have both an ingot and dust form.
        .dust() -> this will make the material have a dust form. Don't use this together with .dust().
        .gem() -> this will make the material have both a gem form and a dust form. Don't use thos together with .dust() or .ingot()
        .fluid() -> this will make the material have a fluid form. 
        .gas() -> this will make the material have a gas(fluid) form with gas properties. 
        .plasma() -> this will make the material have a plasma(fluid) form with plasma properties.
        .polymer() -> this will make the material have a dust form with polymer properties.
            For .ingot(), .dust() and .gem(), optionally you can put inside the parantheses any of these sets of parameters:
                1. harvest level (ex. .ingot(2) will make the material have the harvest level of iron tools)
                2. harvest level, burn time (2x. ingot(2, 2000) will make the material have the harvest level of iron tools and will burn in furnaces as fuel for 2000 ticks or 100 seconds).
        .burnTime(burn time in ticks) -> this will turn the material into a furnace fuel.
        .fluidBurnTime(burn time in ticks) -> how long the fluid of the material will burn.
        .color(color code) -> gives the material a color. The colo must be providen in the following form: 0xNNNNNN, where N are digits.
            To chose a color for your material, you can checkout https://www.w3schools.com/colors/colors_picker.asp
            After you select a color with the above tool, copy the 6 digits that follow the # under the color preview.
        .secondaryColor(color code) -> gives the material a secondary color. If this is not being called, the secondary value will default to white(0xffffff).
        .iconSet(set) -> gives the material an icon set. View line 9 to see the posible icon sets.
        .components(component1, component2, ...) -> describes the composition. The components are a list of elements of the following form: 'Kx material_name', where K is a positive integer.
            Depending on the composition, gt will autogenerate an electrolyzer or centrifuge recipe to decompose the material. You can block that by adding the disable decomposition flag.
        .flags(flag1, flag2, ...) -> flags can be used to select certain properties of the material, like generating gears, or disabling decomposition.
        .element(element) -> similar to .components(), but is used when the material represents an element. 
            See line X for a list of posible flags.
        .rotorStats(power, efficiency, damage, durability) -> this will create a turbine rotor from this material.
        blastTemp() -> this is meant to be paired together with .ingot(). Will generate a EBF recipe(and an ABS recipe) based on the parameters you give it:
            1. temperature -> dictates what coil tier it will require(check the coil tooltips for their max temperature). 
                If the temperature is below 1000, it will also generate a PBF recipe.
                If temperature is above 1750, a hot ingot will be generated, this requiring a Vacuum Freezer.
            2. (optional) gas tier -> can be null for none, 'low' for nitrogen, 'mid' for helium, 'high' for argon, 'higher' for neon or 'highest' for krypton.
            3. (optional) EU per tick -> the recipe voltage
                (USEFUL NOTE: gt has some inbuilt functions to ease chosing the voltages, you can use V('tier') for full amp, VA('tier') for full amp, but adjusted for cable loss, VH('tier) for half an amp or VHA('tier) for half an amp adjusted for cable loss).
            4. (optional) duration in ticks -> how long the recipe should take
        .ore() -> this will create an ore from the material.
            Optionally you can add any of these sets of parameters:
                1. is emissive -> true for emissive textures
                2. ore multiplier and byproduct multiplier -> how many crushed ores will be given from one raw ore and how many byproducts dusts will be given throughout the ore processing
                3. ore multiplier, byproduct multiplier, is emissive
        .washedIn()
        .separatedIn()
        .separatedInto()
        .oreSmeltInto()
        .polarizesInto()
        .arcSmeltInto()
        .maceratesInto()
        .ingotSmeltInto()
        .addOreByproducts()
        .cableProperties() -> generates wires and cables(if material is not a superconducter). The following parameter sets can be given:
            1. Voltage, amperage, loss per block
            2. Voltage, amperage, loss per block, is superconductor -> for a super conductor, set loss as 0 and is super conductor as true
            3. Voltage, amperage, loss per block, is super conductor and critical temperature
        .toolProperties()
        .fluidPipeProperties() ->
            (int maxTemp, int throughput [tiny pipe], boolean gasProof, boolean acidProof, boolean cryoProof, boolean plasmaProof)
        .itemPipeProperties() ->
            (int priority, float stacksPerSec)
        .addDefaultEnchant()
        
*/

// GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    
//     event.create('fluix').parent('certus');
// });

// GTCEuStartupEvents.materialModification(event => {

    // GTMaterials.Netherite.setMaterialARGB(0x1a0d00);
    // GTMaterials.Netherite.setMaterialIconSet(DULL);
    // GTMaterials.Netherite.addFlags(rod, foil);

    // GTMaterials.get('netherite_trisulfate_complex').setFormula('[*Nr*(SO4)3](OH)2');

// });

GTCEuStartupEvents.registry('gtceu:material', event => {

    // // Periodic table materials
    // const element = global.periodicTableElement;
    // // Ingots
    // element('zirconium', 'ingot');
    // element('tellurium', 'ingot');
    // element('polonium', 'ingot');
    // element('astatine', 'ingot');
    // element('hafnium', 'ingot');
    // element('seaborgium', 'ingot');
    // element('flerovium', 'ingot');
    // element('rhenium', 'ingot');
    // element('dysprosium', 'ingot');

    // // Dusts
    // element('selenium', 'dust');
    // element('strontium', 'dust');
    // element('thallium', 'dust');
    // element('neptunium', 'dust');
    // element('fermium', 'dust');

    // // Liquids
    // element('seaborgium', 'fluid');
    // element('flerovium', 'fluid');
    // element('rhenium', 'fluid');
    // element('zirconium', 'fluid');
    // element('hafnium', 'fluid');
    // element('fermium', 'fluid');
    // element('selenium', 'fluid');

    // // Gasses

    // // Plasmas

    // // Plasma + Gas
    // element('oganesson', 'gas_plasma');


    // Materials from elements
    const compIngot = (name, elements, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().components(elements).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid().components(elements).color(color).iconSet(icon).flags(flags);
        }
    }

    const elemIngot = (name, element, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().element(GTElements.get(element)).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid().element(GTElements.get(element)).color(color).iconSet(icon).flags(flags);
        }
    }

    const compIngotLiquid = (name, elements, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().fluid().components(elements).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid().components(elements).color(color).iconSet(icon).flags(flags);
        }
    }

    const compIngotLiquidSecColor = (name, elements, color1, color2, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().fluid().components(elements).color(color1).secondaryColor(color2).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid().components(elements).color(color1).secondaryColor(color2).iconSet(icon).flags(flags);
        }
    }

     const elemLiquidSecColor = (name, color1, color2, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().fluid().element(GTElements.get(name)).color(color1).secondaryColor(color2).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid().element(GTElements.get(name)).color(color1).secondaryColor(color2).iconSet(icon).flags(flags);
        }
    }

    const elemIngotFluid = (name, color, icon, blasting, flags) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().fluid().element(GTElements.get(name)).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
        } else {
            event.create(name).ingot().fluid().element(GTElements.get(name)).color(color).iconSet(icon).flags(flags);
        }
    }
    
    const compLiquid = (name, elements, color, flags) => {
        event.create(name).fluid().components(elements).color(color).flags(flags);
    }

    const elemFluid = (name, element, color, flags) => {
        event.create(name).fluid().element(GTElements.get(element)).color(color).flags(flags);
    }

    const compLiquidTemp = (name, heat, elements, color, flags) => {
        event.create(name).liquid(new GTFluidBuilder().temperature(heat)).components(elements).color(color).flags(flags);
    }
    
    const compLiquidStill = (name, elements, flags) => {
        event.create(name).liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill()).components(elements).flags(flags);
    }
    
    const compDustLiquid = (name, elements, color, flags) => {
        event.create(name).dust().fluid().components(elements).color(color).flags(flags);
    }

    const elemDustFluid = (name, color, flags) => {
        event.create(name).dust().fluid().element(GTElements.get(name)).color(color).flags(flags);
    }
    
    const compDust = (name, elements, color, flags) => {
        event.create(name).dust().components(elements).color(color).flags(flags);
    }
    
    const compDustIcon = (name, elements, color, icon, flags) => {
        event.create(name).dust().components(elements).color(color).iconSet(icon).flags(flags);
    }

    const elemDust = (name, color, flags) => {
        event.create(name).dust().element(GTElements.get(name)).color(color).flags(flags);
    }
    
    const compGem = (name, elements, color, icon, flags) => {
        event.create(name).gem().components(elements).color(color).iconSet(icon).flags(flags);
    }

    const elemGem = (name, color, icon, flags) => {
        event.create(name).gem().element(GTElements.get(name)).iconSet(icon).color(color).flags(flags);
    }
    
    const compGas = (name, elements, color, flags) => {
        event.create(name).gas().components(elements).color(color).flags(flags);
    }

    const elemGas = (name, color, flags) => {
        event.create(name).gas().element(GTElements.get(name)).color(color).flags(flags);
    }

    const polymerFluidPipe = (name, elements, color, pipe, flags) => {
            event.create(name).polymer().fluid().components(elements).color(color).flags(flags).fluidPipeProperties(pipe[0], pipe[1], pipe[2], pipe[3], pipe[4], pipe[5]);
    }

    const polymerFluid = (name, elements, color, flags) => {
            event.create(name).polymer().fluid().components(elements).color(color).flags(flags);
    }

    const conductor = (name, elements, color, icon, blasting, cable, flags) => {
        event.create(name).ingot().fluid().components(elements).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]).cableProperties(cable[0], cable[1], cable[2], cable[3]);
    }
    
    const conductorSuper = (name, elements, color, blasting, cable, rotorstat) => {
        if (blasting.includes(blasting[0])){
            event.create(name).ingot().fluid().components(elements).color(color).iconSet(SHINY).flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame, fine_wire)
                .blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]).cableProperties(cable[0], cable[1], cable[2], cable[3]).rotorStats(rotorstat[0], rotorstat[1], rotorstat[2], rotorstat[3]);
        } else {
            event.create(name).ingot().fluid().components(elements).color(color).iconSet(SHINY).flags(foil, gear, long_rod, plates, rod, rotor, small_gear, ring, frame, fine_wire)
                .cableProperties(cable[0], cable[1], cable[2], cable[3]).rotorStats(rotorstat[0], rotorstat[1], rotorstat[2], rotorstat[3]);
        }
    }

    const compDustLiquidOre = (name, elements, color, flags) => {
        event.create(name).dust().liquid().ore(2, 1).components(elements).color(color).flags(flags);
    }
    
    const compDustOre = (name, elements, color, flags) => {
        event.create(name).dust().ore(2, 1).components(elements).color(color).flags(flags);
    }
    
    const compGemOre = (name, elements, color, icon, flags) => {
        event.create(name).gem().ore(2, 1).components(elements).color(color).iconSet(icon).flags(flags);
    }

    const compIngotPlasma = (name, elements, color, icon, blasting, flags) => {
        event.create(name).ingot().fluid().plasma().components(elements).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
    }

    const compIngotPlasmaSecColor = (name, elements, color1, color2, icon, blasting, flags) => {
        event.create(name).ingot().fluid().plasma().components(elements).color(color1).secondaryColor(color2).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]);
    }

    const conductorPlasma = (name, elements, color, icon, blasting, cable, flags) => {
        event.create(name).ingot().fluid().plasma().components(elements).color(color).iconSet(icon).flags(flags).blastTemp(blasting[0], blasting[1], blasting[2], blasting[3]).cableProperties(cable[0], cable[1], cable[2], cable[3]);
    }

    const noCompFluid = (name, color) => {
        event.create(name).fluid().color(color);
    }

    const compPlasma = (name, temp, elements, color, flags) => {
        event.create(name).liquid(new GTFluidBuilder().temperature(temp)).plasma().components(elements).color(color).flags(flags);
    }

        // === Early Game ===
    event.create('latex').liquid().color(0xe3e1cc);

    [
        'andesite','basalt','blackstone','deepslate','diorite','granite','tuff'
    ].forEach(stone => {
        event.create(`${stone}_slurry_t1`).liquid().color(0xffffff);
    });

    compIngot('pig_iron','1x iron',0x8e8385,DULL,[],[no_decomp, no_smelt]);

    event
        .create('flisnt')
        .color(0x888b8c)
        .toolStats(
            ToolProperty.Builder.of(1, 1, 128, 1, [
                GTToolType.SAW,
                GTToolType.HARD_HAMMER,
                GTToolType.PICKAXE,
                GTToolType.SHOVEL,
                GTToolType.AXE,
                GTToolType.SWORD,
                GTToolType.KNIFE,
                GTToolType.SCYTHE
            ]).build()
        );

    event.create('coke_clay').dust().color(0xd7d2aa).secondaryColor(0xa09c78);

    compIngot('crude_cast_iron', '1x pig_iron', 0x3d413f, DULL, [], [no_decomp, no_smelt]);

    compIngotLiquidSecColor('leaded_bronze', ['16x copper', '3x tin', '1x lead'], 0xc99c5d, 0x3a2a3f, METALLIC, [], [
        not_alloy,
        long_rod,
        plates,
        rod,
        frame,
        bolt_and_screw,
        no_decomp, 
        no_smelt
    ]);

    event
        .create('crude_wrought_iron')
        .ingot()
        .liquid(new GTFluidBuilder().temperature(1700))
        .components('1x wrought_iron')
        .color(0x7a6e69)
        .iconSet(DULL)
        .flags(no_decomp, no_smelt);

    event
        .create('cast_iron')
        .ingot(1)
        .liquid()
        .components('18x crude_cast_iron', '1x bismuth', '2x copper')
        .color(0x696e6c)
        .secondaryColor(0x4c5052)
        .iconSet(METALLIC)
        .blastTemp(1450, 'low', VA('mv'), 1200)
        .flags(
            not_alloy,
            foil,
            gear,
            long_rod,
            plates,
            rod,
            rotor,
            small_gear,
            ring,
            frame,
            bolt_and_screw,
            no_decomp,
            no_smelt
        );

    // // Materials

    // elemDust('uranium_233',0x4fbb4f,[no_smelt]);

    // elemDustFluid('plutonium_238',0xc13d3d,[no_smelt]);

    // elemDust('plutonium_244',0x951f1f,[no_smelt]);

    // elemDust('americium_241',0x1e492f,[no_smelt]);

    // elemDust('curium_244',0x6f4c46,[no_smelt]);

    // elemDust('californium_252',0xa38783,[no_smelt]);

    // elemDust('einsteinium_253',0xddbc4d,[no_smelt]);

    // // Crown Ethers
    // compLiquid('sulfur_dichloride', ['1x sulfur', '2x chlorine'], 0xcc0000, []);

    // compLiquid('thionyl_chloride', ['1x sulfur', '1x oxygen', '2x chlorine'], 0xffffcc, [no_decomp]);

    // compLiquid('sulfuryl_chloride', ['1x sulfur', '2x oxygen', '2x chlorine'], 0xffffcc, []);

    // compLiquid('triglycol_dichloride', ['6x carbon', '12x hydrogen', '2x oxygen', '2x chlorine'], 0xffffcc, []);

    // compLiquid('ethylene_glycol', ['2x carbon', '6x hydrogen', '2x oxygen'], 0xf2f2f2, []);

    // compLiquid('diethylene_glycol', ['4x carbon', '10x hydrogen', '3x oxygen'], 0xf2f2f2, []);

    // compLiquid('triethylene_glycol', ['6x carbon', '14x hydrogen', '4x oxygen'], 0xf2f2f2, []);

    // compLiquid('ethylene_oxide', ['2x carbon', '4x hydrogen', '1x oxygen'], 0xd9d9d9, []);

    // compDust('lithium_perchlorate', ['1x lithium', '1x chlorine', '4x oxygen'], 0xe6f2ff, []);

    // compDust('sodium_perchlorate', ['1x sodium', '1x chlorine', '4x oxygen'], 0xccf2ff, []);

    // compDust('sodium_chlorate', ['1x sodium', '1x chlorine', '3x oxygen'], 0xccf2ff, []);

    // compDust('silver_oxide', ['2x silver', '1x oxygen'], 0xe3e3e3, []);

    // compLiquid('12_crown_4', ['8x carbon', '16x hydrogen', '4x oxygen'], 0xcc6699, []);

    // compLiquid('15_crown_5', ['10x carbon', '20x hydrogen', '5x oxygen'], 0x0099cc, []);

    // compLiquid('18_crown_6', ['12x carbon', '24x hydrogen', '6x oxygen'], 0x99ff33, []);

    // compLiquid('12_crown_4_li', ['1x lithium', '8x carbon', '16x hydrogen', '4x oxygen'], 0x993366, [no_decomp]);

    // compLiquid('15_crown_5_na', ['1x sodium', '10x carbon', '20x hydrogen', '5x oxygen'], 0x006080, [no_decomp]);

    // compLiquid('18_crown_6_k', ['1x potassium', '12x carbon', '24x hydrogen', '6x oxygen'], 0x4d9900, [no_decomp]);

    // compDust('4_toluenesulfonyl_chloride', ['7x carbon', '7x hydrogen', '2x chlorine', '2x oxygen', '1x sulfur'], 0xffccc, [no_decomp]);

    // compDust('triethylene_glycol_ditosylate', ['20x carbon', '26x hydrogen', '8x oxygen', '2x sulfur'], 0xb8b894, [no_decomp]);

    // compDust('sodium_azide', ['1x sodium', '3x nitrogen'], 0xcc6699, []);

    // compDust('palladium_on_carbon', ['1x palladium', '1x carbon'], 0xff9900, []);

    // compDust('sodium_p_toluenesulfonate', ['7x carbon', '7x hydrogen', '1x sodium', '3x oxygen', '1x sulfur'], 0x00cc00, [no_decomp]);

    // compDust('triethylene_glycol_diazide', ['6x carbon', '12x hydrogen', '2x oxygen', '6x nitrogen'], 0x6666ff, [no_decomp]);

    // compDust('triethylene_glycol_diamine', ['6x carbon', '16x hydrogen', '2x oxygen', '2x nitrogen'], 0xcc00cc, [no_decomp]);

    // compLiquid('cryptand', ['18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen'], 0x993333, [no_decomp]);

    // compLiquid('cryptand_k', ['1x potassium', '18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen'], 0x602020, [no_decomp]);

    // compLiquid('cryptand_na', ['1x sodium', '18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen'], 0x602020, [no_decomp]);

    // compLiquid('cryptand_li', ['1x lithium', '18x carbon', '36x hydrogen', '6x oxygen', '2x nitrogen'], 0x602020, [no_decomp]);

    // // Solder
    // compIngotLiquid('indium_tin_lead_cadmium_soldering_alloy', ['14x indium', '3x tin', '2x lead', '1x cadmium'], 0xa6a6a6, [], [], []);

    // compIngotLiquid('naquadated_soldering_alloy', ['3x tin', '18x indium', '6x silver', '4x lutetium', '3x cerium', '3x naquadah', '1x trinium', '2x lead'], 0x8790A1, [], [], []);

    // // PEEK plastic Line
    // compDust('disodium_salt_of_hydroquinone', ['6x carbon','4x hydrogen','2x oxygen','2x sodium'], 0xeaeaf9, no_decomp);

    // compDust('hydroquinone', ['6x carbon','6x hydrogen','2x oxygen'], 0xf9f9ff, [no_decomp]);

    // compDust('sodium_fluoride', ['1x sodium','1x fluorine'], 0xDEDEE2, []);

    // compGas('carbon_acid', ['2x hydrogen','1x carbon','3x oxygen'], 0x333333, [no_decomp]);

    // compLiquid('fluorobenzene', ['6x carbon','5x hydrogen','1x fluorine'], 0xffffff, [no_decomp]);

    // compLiquid('4_fluorobenzoyl_chloride', ['7x carbon','4x hydrogen','1x chlorine','1x fluorine','1x oxygen'], 0xfffff0, [no_decomp]);
    
    // compLiquid('benzoyl_chloride', ['7x carbon','5x hydrogen','1x chlorine','1x oxygen'], 0xfffadf, [no_decomp]);

    // compLiquid('benzotrichloride', ['7x carbon','5x hydrogen','3x chlorine'], 0xddd8bc, [no_decomp]);

    // compDust('44_difluorobenzophenone', ['13x carbon','8x hydrogen','1x oxygen','2x fluorine'], 0xeee1c9 ,[no_decomp]); //naming like this: 4_4_di... will make kubejs go error to annoy you :)
    
    // polymerFluidPipe('polyether_ether_ketone', ['19x carbon','12x hydrogen','3x oxygen'], 0xccbba7, [550, 600, true, true, true, false], [foil, plates, ring, no_decomp]);
    
    // // SiC/Bi2Te3 Line
    // compDust('sodium_borohydride', ['1x sodium','1x boron','4x hydrogen'], 0xE3DEC8, [no_decomp]);

    // compGas('nitrate', ['1x nitrogen', '3x oxygen'], 0xDBC365, [no_decomp]); //Hide in JEI

    // compDust('bismuth_3_nitrate', ['1x bismuth', '3x nitrate'], 0xDEDBCD, [no_decomp]);

    // compDust('sodium_nitrate', ['1x sodium','1x nitrogen','3x oxygen'], 0xE6E5E5, []);

    // compGas('diborane', ['2x boron','6x hydrogen'], 0xFDFFE1, []);

    // compDust('silicon_carbide', ['1x silicon', '1x carbon'], 0xB79F8D, []);
        
    // compDust('bismuth_tritelluride', ['2x bismuth', '3x tellurium'], 0xDEB18E, [no_decomp]); //Hide in JEI

    // compDust('silicon_carbide_over_bismuth_tritelluride', ['1x silicon_carbide', '1x bismuth_tritelluride'], 0x86C455, []);

    //Hexafluorobromic Acid
    // compDustIcon('nickel_fluoride', ['1x nickel', '2x fluorine'], 0xA7A9A8, METALLIC, []);

    // compDustIcon('caesium_fluoride', ['1x caesium', '1x fluorine'], 0x969D9B, DULL, []);

    // compLiquid('bromine_pentafluoride', ['1x bromine', '5x fluorine'], 0x8E6565, []);
     
    // compLiquid('hexafluorobromine', ['1x bromine', '6x fluorine'], 0x000000, [no_decomp]);

    // compLiquid('caesium_hexafluorobromine', ['1x caesium', '1x hexafluorobromine'], 0x988585 ,[no_decomp]);

    // compLiquid('hexafluorobromic_acid', ['1x hydrogen', '1x hexafluorobromine'], 0xA15E5E, [no_decomp]);

    // // PEDOT:PSS plastic Line
    // compLiquid('maleic_anhydride', ['4x carbon', '2x hydrogen', '3x oxygen'], 0xAAA099, [no_decomp]);

    // compLiquid('dimethyl_maleate', ['6x carbon', '10x hydrogen', '4x oxygen'], 0xC2BFB7, [no_decomp]);

    // compLiquid('dimethyl_succinate', ['4x carbon', '10x hydrogen', '3x oxygen'], 0xD0CCC4, [no_decomp]);

    // compLiquid('14_butanediol', ['4x carbon', '10x hydrogen', '2x oxygen'], 0xB8C4C4, [no_decomp]);

    // compDust('thiophene', ['4x carbon', '4x hydrogen', '1x sulfur'], 0xC8B680, [no_decomp]);

    // compLiquid('12_dibromoethane', ['2x carbon', '4x hydrogen', '2x bromine'], 0xB0A6CC, [no_decomp]);

    // compGas('dimethylformamide', ['3x carbon', '7x hydrogen', '1x nitrogen', '1x oxygen'], 0xA3B0B7, [no_decomp]); // DMF

    // compLiquid('34_ethylenedioxythiophene', ['6x carbon', '6x hydrogen', '2x oxygen', '1x sulfur'], 0x8A9A86, [no_decomp]); // EDOT

    // compDust('potassium_bromide', ['1x potassium', '1x bromine'], 0xD0D0D0, []);

    // compDust('benzoyl_peroxide', ['14x carbon', '10x hydrogen', '4x oxygen'], 0xC6A8A8, [no_decomp]);

    // compGas('hydrogen_chloride', ['1x hydrogen', '1x chlorine'], 0xA8CCC2, []);

    // compLiquid('chlorosulfonic_acid', ['1x hydrogen', '1x sulfur', '3x oxygen', '1x chlorine'], 0xA84E4E, [no_decomp]);

    // compLiquid('polystyrene_sulfate', ['8x carbon', '8x hydrogen', '3x oxygen', '1x sulfur'], 0xD8C6F0, [no_decomp]); // PSS

    // compDust('ferric_nitrate', ['1x iron', '3x nitrate'], 0xAF5F5F, [no_decomp]);

    // compLiquid('poly_34_ethylenedioxythiophene', ['6x carbon', '4x hydrogen', '2x oxygen', '1x sulfur'], 0x7C8FB2, [no_decomp]); //PEDOT
    
    // compLiquid('sorbitol', ['6x carbon', '14x hydrogen', '6x oxygen'], 0xF8F0E8, [no_decomp]); //gotten from bacteria

    // compLiquid('sorbitan', ['6x carbon', '12x hydrogen', '5x oxygen'], 0xE8D6C6, [no_decomp]); //losses a water to steam

    // compLiquid('sorbitan_monoester', ['24x carbon', '46x hydrogen', '6x oxygen'], 0xD9CBB3, [no_decomp]);
    
    // compLiquid('polysorbate_20', ['1x sorbitan_monoester', '20x ethylene_glycol'], 0xA0D7DD, [no_decomp]);

    // compDust('poly_34_ethylenedioxythiophene_polystyrene_sulfate_paste', ['9x carbon', '7x hydrogen', '1x sulfur', '3x oxygen'], 0x5D5A85, [no_decomp]);

    // compLiquid('poly_34_ethylenedioxythiophene_polystyrene_sulfate_solution', ['1x poly_34_ethylenedioxythiophene_polystyrene_sulfate_paste', '2x water'], 0x6C7FB0, [no_decomp]);

    // polymerFluidPipe('poly_34_ethylenedioxythiophene_polystyrene_sulfate', ['8x carbon', '7x hydrogen', '1x sulfur', '3x oxygen'], 0x26396D, [675, 800, true, true, true, false], [foil, plates, ring, plates, no_decomp]); //PEDOT

    // //FFKM Line [Rubber After SBR]
    // compLiquid('perfluoromethyl_vinyl_ether', ['3x carbon', '6x fluorine', '1x oxygen'], 0xD0E5E5, [no_decomp]);

    // compLiquid('hexafluorobutadiene', ['4x carbon', '6x fluorine'], 0xB8D2D9, [no_decomp]);

    // compDust('raw_perfluoroelastomer_rubber', ['3x tetrafluoroethylene', '1x perfluoromethyl_vinyl_ether', '1x hexafluorobutadiene'], 0xB0CCCC, [no_decomp]);

    // event.create('perfluoroelastomer_rubber')
    //     .polymer()
    //     .fluid()
    //     .components('1x raw_perfluoroelastomer_rubber')
    //     .color(0x536767)
    //     .flags(foil, plates, ring, plates, rod, no_decomp)
    //     .toolStats(ToolProperty.Builder.of(1, 1, 65535, 1, [
	// 		GTToolType.SOFT_MALLET,
    //         GTToolType.PLUNGER
	// 	]).unbreakable().build());

    // //Polyimide Line [Insulator UHV+]
    // compLiquid('azanide', ['1x nitrogen', '2x hydrogen'], 0xBFC7E5, [no_decomp]); //Hide in JEI

    // compLiquid('benzophenone', ['13x carbon', '10x hydrogen', '1x oxygen'], 0xE5D3B5, [no_decomp]);

    // compLiquid('methylamine', ['1x carbon', '3x hydrogen', '1x nitrogen', '2x hydrogen'], 0xD8D8E5, [no_decomp]);

    // compDust('benzophenone_3344_tetracarboxylic_dianhydride', ['17x carbon', '6x hydrogen', '7x oxygen'], 0xD1B9A3, [no_decomp]);

    // compLiquid('y_butyrolactone', ['4x carbon', '6x hydrogen', '2x oxygen'], 0xD6E2E2, [no_decomp]);

    // compLiquid('m_phelyenediamine', ['6x carbon', '4x hydrogen', '2x azanide'], 0xE2BFC0, [no_decomp]);

    // compDust('n_methyl_2_pyrrolidone', ['5x carbon', '9x hydrogen', '1x nitrogen', '1x oxygen'], 0xBDC8D8, [no_decomp]);

    // compLiquid('polyamic_acid', ['17x carbon', '12x hydrogen', '2x nitrogen', '6x oxygen'], 0xCBBFA3, [no_decomp]);

    // polymerFluid('polyimide', ['17x carbon', '10x hydrogen', '2x nitrogen', '4x oxygen'], 0xD6A970, [foil, plates, plates, rod, no_decomp]);

    // Large Multis
    // const largeMulti = (name,components,color) => {
    //     compIngot(name, components, color, DULL, [2200, 'low', VA('mv'), 1500], [plates, frame, rod]);
    // }

    // largeMulti('birmabright', ['7x aluminium', '2x magnesium', '1x manganese'], 0xbfbfbf);  
    // largeMulti('duralumin', ['4x aluminium', '3x copper', '1x magnesium', '1x manganese'], 0x66ccff);  
    // largeMulti('hydronalium', ['6x aluminium', '3x magnesium', '1x manganese'], 0x660000);  
    // largeMulti('beryllium_aluminium_alloy', ['7x beryllium', '1x aluminium'], 0x006699);  
    // largeMulti('elgiloy', ['4x cobalt', '2x chromium', '1x nickel', '1x steel', '1x molybdenum', '1x manganese'], 0xff00ff);  
    // largeMulti('beryllium_bronze', ['10x copper', '1x beryllium'], 0x003300);  
    // largeMulti('silicon_bronze', ['32x copper', '2x silicon', '1x manganese'], 0x1a1a1a);  
    // largeMulti('kovar', ['18x iron', '11x nickel', '6x cobalt'], 0x000080);  
    // largeMulti('zamak', ['1x zinc', '4x aluminium', '3x copper'], 0x8c8c8c);  
    // largeMulti('tumbaga', ['20x copper', '6x gold', '1x silver'], 0xffdb4d);  
    // largeMulti('manganin', ['20x copper', '6x manganese', '1x nickel'], 0xF8AA92);
    // largeMulti('galvanized_steel', ['7x steel', '1x zinc'], 0x999999);

        // compDust('indium_oxide', ['2x indium', '3x oxygen'], 0xe3d28e, []);

    // //Lubricant
    // compDustLiquid('tungsten_disulfide', ['1x tungsten', '2x sulfur'], 0x928897, [no_decomp]);

    // //Bromine Line
    // event.create('acidic_bromine_solution')
    //     .liquid()
    //     .color(0xc49b52)
    //     .components('1x chlorine', '1x bromine')
    //     .flags(no_decomp);

    // event.create('concentrated_bromine_solution')
    //     .liquid()
    //     .color(0x91481e)
    //     .components('2x bromine', '1x chlorine')
    //     .flags(no_decomp);

    // event.create('hydrogen_iodide')
    //     .gas()
    //     .color(0x8187a6)
    //     .components('1x hydrogen', '1x iodine')
    //     .flags(no_decomp);
    
    // event.create('hot_brine')
    //     .liquid(320)
    //     .color(0xbe6026);

    // event.create('hot_chlorinated_brominated_brine')
    //     .liquid(320)
    //     .color(0xab765d)
    //     .components('1x hot_brine', '1x chlorine')
    //     .flags(no_decomp);

    // event.create('hot_debrominated_brine')
    //     .liquid(320)
    //     .color(0xab896d);

    // event.create('hot_alkaline_debrominated_brine')
    //     .liquid(320)
    //     .color(0xbe8938)
    //     .components('2x hot_debrominated_brine', '1x chlorine')
    //     .flags(no_decomp);

    // noCompFluid('raw_brine',0x9f6b26)

    // noCompFluid('debrominated_brine',0xab8c6d)
    
    // event.create('brominated_chlorine_vapor')
    //     .gas()
    //     .color(0xbb9b72)
    //     .components('1x chlorine', '1x bromine', '1x steam')
    //     .flags(no_decomp);
    
    // event.create('acidic_bromine_exhaust')
    //     .gas()
    //     .color(0x8f681e)
    //     .components('3x steam', '1x chlorine');
    

    // //Polycarbonate Line
    // compDust(`sodium_diphenoxide`, [`2x sodium`, `2x oxygen`, `15x carbon`, `16x hydrogen`], 0xFEFEFE, [no_decomp]);
    // compLiquid(`phosgene`, [`carbon`, `oxygen`, `2x chlorine`], 0xFDFEFC, [no_decomp]);
    // polymerFluidPipe(`polycarbonate`, [`3x oxygen`, `16x carbon`, `16x hydrogen`], 0x202020, [388, 300, true, true, false, false], [no_decomp, foil, plates]);


    // //Combustion fuels and oxidizers
    // compLiquid(`kerosene`,[`12x carbon`,`26x hydrogen`],0xE8D44D, [no_decomp]);
    // compLiquid(`hydrofined_kerosene`,[`12x carbon`,`26x hydrogen`],0xF2EC9A , [no_decomp]);
    // compLiquid(`rp_1`,[`12x carbon`,`26x hydrogen`],0xF2EC9A , [no_decomp]);
    // compLiquidTemp(`liquid_fluorine`,85, [`2x fluorine`], 0xB5E0FF, [no_decomp]);
    // compLiquidTemp(`dioxygen_difluoride`, 110, [`2x oxygen`, `2x fluorine`], 0xE8F1FF, [no_decomp]);
    // compLiquid(`white_fuming_nitric_acid`, [`1x hydrogen`, `1x nitrogen`, `3x oxygen`], 0xFDFEFC, [no_decomp]);
    // compLiquid(`red_fuming_nitric_acid`, [`1x hydrogen`, `1x nitrogen`, `3x oxygen`], 0xFF0000, [no_decomp]);
    // compLiquid(`monomethylhydrazine`, [`1x carbon`, `6x hydrogen`, `2x nitrogen`], 0x9E9E9E, [no_decomp]);
    // compLiquid(`sorbitol_hypergolic_fuel`, [`6x carbon`, `20x hydrogen`, `6x oxygen`, `1x nitrogen`, `1x boron`], 0xF5F5F5, [no_decomp]);
    // compLiquid(`ferrocenium_superoxide`, [`15x carbon`, `5x hydrogen`, `15x fluorine`, `1x iron`, `2x oxygen`], 0xB87333, [no_decomp]);
    // compLiquid(`fuming_nitric_acid`, [`1x hydrogen`, `1x nitrogen`, `3x oxygen`], 0xF0F0F0, [no_decomp]);
    // compLiquid(`hydrazine`, [`2x nitrogen`, `4x hydrogen`], 0xC8C8C8, [no_decomp]);
    // compDust(`ammonia_borane`, [`1x nitrogen`, `1x boron`, `6x hydrogen`], 0xFFFFFF, [no_decomp]);
    // compLiquid(`ferrocene`, [`10x carbon`, `10x hydrogen`, `1x iron`], 0xFF8C00, [no_decomp]);
    // compLiquid(`hexafluorophosphoric_acid`, [`1x hydrogen`, `1x phosphorus`, `6x fluorine`], 0xE8E8FF, [no_decomp]);
    // compLiquid(`iron_cyclopentadienyl_dichlorobenzene`, [`16x carbon`, `14x hydrogen`, `1x iron`, `2x chlorine`, `1x phosphorus`, `6x fluorine`], 0xCC6600, [no_decomp]);
    // compLiquid(`fluorinated_ferrocene`, [`15x carbon`, `5x hydrogen`, `15x fluorine`, `1x iron`], 0x00AA00, [no_decomp]);

});