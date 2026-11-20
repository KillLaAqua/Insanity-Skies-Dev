// Flag Modification
GTCEuStartupEvents.registry('gtceu:material', (event) => {
    
    const matmod = (mat, flag) => {GTMaterials.get(mat).addFlags(flag)};

    matmod('iron', [foil, frame]);
    matmod('brass', [ring, foil, frame]);
    matmod('tin_alloy', [ring, foil, rotor]);
    matmod('potin', [foil, ring, small_gear]);
    matmod('cupronickel', [ring]);
    matmod('nickel', [foil]);
    matmod('wrought_iron', [frame, small_gear]);
    matmod('red_alloy', [spring]);
    matmod('lead', [small_gear, gear]);
    matmod('black_steel', [bolt_and_screw, rotor, gear, small_gear]);
    matmod('hsla_steel', [bolt_and_screw, rotor]);
    matmod('ultimet', [gear, small_gear]);
    matmod('magnalium', [gear, small_gear]);
    matmod('damascus_steel', [gear, small_gear, fine_wire, foil]);
    matmod('blue_alloy', [fine_wire, foil]);
    matmod('silver', gear);
    matmod('gold', gear);
    matmod('copper', [gear, frame]);
    // matmod('naquadah', dense_plate);
    // matmod('enriched_naquadah', [dense_plate, rotor, gear, small_gear, frame, long_rod]);
    // matmod('naquadria', dense_plate);
    // matmod('neutronium', [foil, small_gear,rotor, dense_plate]);
    // matmod('europium', [small_spring,bolt_and_screw]);
    // matmod('zirconium', fine_wire);
    // matmod('hafnium', fine_wire);
    // matmod('rhenium', fine_wire);
    // matmod('red_steel', [rod, frame]);
    // matmod('sterling_silver', [rod, frame]);
    // matmod('nether_star', foil);
    // matmod('netherite', no_decomp);
    // matmod('echo_shard', [lens, foil]);
    // matmod('certus_quartz', lens);
    // matmod('vanadium_gallium', fine_wire);
    // matmod('titanium', foil);
    // matmod('rhodium_plated_palladium', [frame, foil]);
    // matmod('palladium', [rotor]);
    // matmod('darmstadtium', [frame, foil]);
    // matmod('ruthenium_trinium_americium_neutronate', fine_wire);
    // matmod('electrum', gear);
    // matmod('blue_alloy', gear);
    // matmod('cupronickel', small_spring);
    // matmod('kanthal', small_spring);
    // matmod('nichrome', small_spring);
    // matmod('tantalum_carbide', foil);
    // matmod('dysprosium', long_rod);
    // matmod('trinium', fine_wire);
    // matmod('naquadah_alloy', round);
    // matmod('ruridit', [small_gear, rotor]);
    // matmod('iridium', rotor);
    // matmod('netherite', no_decomp);
    // matmod('naquadah', frame);
    // matmod('uranium_triplatinum', fine_wire);
    // matmod('samarium_iron_arsenic_oxide', fine_wire);

    // // Blast Properties of periodic table metals
    // const blast = global.blastProperty;
    // blast('zirconium', 8100, 'higher', VA('uv'), 1200);
    // blast('tellurium', 10700, 'higher', VA('uhv'), 900);
    // blast('polonium', 13400, 'higher', VHA('uiv'), 1350);
    // blast('astatine', 12800, 'higher', VA('uhv'), 1400);
    // blast('hafnium', 11900, 'higher', VA('uv'), 750);
    // blast('rhenium', 14800, 'highest', VA('uiv'), 1200);
    // blast('seaborgium', 13300, 'higher', VA('uev'), 1500);
    // blast('flerovium', 12200, 'higher', VA('uhv'), 1200);
    // blast('dysprosium', 6200, 'mid', VHA('luv'), 144);
    // blast('lutetium', 6600, 'mid', VA('luv'), 120);

    // Fluid Pipes
    GTMaterials.NaquadahEnriched.setProperty(PropertyKey.FLUID_PIPE, new FluidPipeProperties(8000, 500, true, true, true, false));

    // Chemical Modifications (Reflected in autogen)
    // GTMaterials.Netherite.setComponents('1x debris', '1x gold');
    
});

// Formula Modifications (Does not reflect in autogen)
GTCEuStartupEvents.materialModification((event) => {
    // GTMaterials.get('yttrium_carbonate').setFormula('Y2(CO3)3');
    // GTMaterials.get('platinum_salt').setFormula('(NH3)4PtCl6');
    // GTMaterials.get('palladium_salt').setFormula('(NH3)5PdCl4');
    // GTMaterials.get('iridium_rich_residue').setFormula('Ir?Oₓ');
});
