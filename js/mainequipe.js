const equipes = [
    {
        "nom_equipe": "Avengers",
        "logo_equipe": "avengers_logo.png",
        "img_membres": "avengers_equipe.jpg",
        "membres_equipe": [
            "Iron Man",
            "Hulk ",
            "Thor",
            "L’Homme-fourmi",
            "La Guêpe",
            "Captain America",
            "La Panthère noire",
            "Œil-de-Faucon",
            "Miss Marvel",
            "Vision"
        ],
        "historique": "Quand un ennemi inattendu fait surface pour menacer la sécurité et l'équilibre mondial, Nick Fury, directeur de l'agence internationale pour le maintien de la paix, connue sous le nom du S.H.I.E.L.D., doit former une équipe pour éviter une catastrophe mondiale imminente. Un effort de recrutement à l'échelle mondiale est mis en place, pour finalement réunir l'équipe de super héros de rêve, dont Iron Man, l'incroyable Hulk, Thor, Captain America, Hawkeye et Black Widow."
    },
    {
        "nom_equipe": "The Defenders",
        "logo_equipe": "logo_defenders.png",
        "img_membres": "defender_members.jpg",
        "membres_equipe": ["Daredevil",
            "Luke cage",
            "Elsa Bloodstone",
            "Cléa",
            "Hippolyte",
            "Ren Kimura",
            "Misty Knight",
            "Dani Moonstar",
            "Annabelle Riggs",
            "la Valkyrie"],
        "historique": "Les Défenseurs sont une « non équipe », une alliance informelle de héros et d’aventuriers qui n’ont aucun effectif officiel, ni règles, ni quartier général, ni même de véritable leader. Les membres de quasi-groupe ne se réunissent généralement que lorsqu’une crise majeure le requiert, même si certains membres centraux des leurs effectifs s’associent ensembles sur une base plus régulière, autant comme alliés que comme amis. Etant en quelque sorte à la limite de l’organisation (leur existence comme équipe fut même gardé secrète pendant plusieurs mois), les Défenseurs attirent souvent les étrangers et les solitaires de la communauté superhéroïque mais également des aventuriers plus chevronnés. A cause de la nature totalement officieuse du groupe, certains considèrent que n’importe quel héros ayant combattu une fois à leurs côtés peut être considéré comme un Défenseur lui-même ; cependant, seuls certains alliés ont été considérés comme des membres des Défenseurs par les membres récurrents de l’équipe ; c’est sur ces conventions établies par les membres les plus importants du groupe qu’ont été définis les catégories de membres ci-dessus."
    },
    {
        "nom_equipe": "HYDRA",
        "logo_equipe": "org_hydra.png",
        "img_membres": "mbr_hydra.jpg",
        "membres_equipe": ["Crâne Rouge",
            "Alveus",
            "Alexander Pierce",
            "Werner Von Strucker",
            "Arnold Brow",
            "Mentallo",
            "Le Fixer",
            "Vipère",
            "Richard Fisk",
            "Wilson Fisk",
            "Le Caméléon",
            "Silvermane",
            "Blackwing",
            "Jackhammer",
            "Le Jaguar",
            "Le Commandant Kraken",
            "Man-Killer",
            "Le Moissonneur",
            "Le Tireur",
            "Comte Otto Vermis",
            "Hardball",
            "Crippler",
            "Sathan",
            "Cassandra Romulus",
            "Guillotine",
            "Bob",
            "Comtesse Valentina Allegra",
            "Daniel Whitehall"],

        "historique": "Dans les parutions de 2014/2015, l'origine de l'HYDRA remonte à un ordre secret crée il y a plus de 5 000 ans dans le but de rechercher l'immortalité. Le fondateur de l'HYDRA moderne est le baron Wolfgang Von Strucker, un nazi qui fut vaincu par Nick Fury. Adolf Hitler voulut l'exécuter en exemple, mais son bras droit d'alors, Crâne Rouge le sauva et le mit à l'abri dans une base de l'Est d'où il créa l'organisation.Il coupa les ponts avec Crâne Rouge et fuit le pays, devenant le premier Hydra Suprême. À la tête d'une petite armée et d'une équipe de scientifiques (les futurs A.I.M), il s'établit sur une île du Pacifique. Il était à deux doigts d'acquérir un arsenal nucléaire quand un commando US/Japon détruisit la base.Vers la fin de la guerre, Von Strucker rebâtit une base avec l'aide des meilleurs S.S. en fuite et vit son travail comme l'héritage du troisième Reich. Il établit son QG aux États-Unis et développa l'HYDRA partout dans le monde. Il prit l'identité secrète du Grand Impérator et délégua son pouvoir à un comité. Alors que sa femme était morte dans la pauvreté, l'homme d'affaires Arnold Brown promit que sa fille Laura ne subirait jamais cette fatalité. Il créa alors Imperial Industries International au service du mal en s'associant à l'HYDRA. Arnold Brown fut nommé « Imperial Hydra » et l'HYDRA développa des sous-marins, des armes et des jets, mais le pouvoir restait secrètement entre les mains du baron. Pour contrer l'HYDRA, le SHIELD fut créé. Son premier directeur, assassiné par les hommes en vert, fut remplacé par Nick Fury, alors à la CIA. Arnold Brown fut tué lors de l'assaut du SHIELD contre le QG de New York. Otto Vermis directeur d'Hydra, a fait un lavage de cerveau à Jessica Drew pour que, sous le nom d'Arachné, elle tente d'assassiner Nick Fury. Quand elle comprit la vraie nature de l'organisation, elle la quitta et devint une justicière costumée sous le nom de Spider-Woman. "
    },
    {
        "nom_equipe": "Le S.H.I.E.L.D",
        "logo_equipe": "shield.png",
        "img_membres": "shieldteam.jpg",
        "membres_equipe": [
            "Norman Osborn (ancien directeur)",
            "Tony Stark (Iron Man, ancien directeur)",
            "Nick Fury (ancien directeur, ancien des Howlings Commandos)",
            "Sharon Carter (Agent 13)",
            "Peggy Carter (Ancien Agent)",
            "Maria Hill (ancienne directrice et sous-directrice)",
            "Alex Remy (alias L’Indépendant ; haut-gradé classe 9 au renseignement)",
            "Timothy « Dum Dum » Dugan (ancien haut-gradé, ancien des Howlings Commandos)",
            "Jessica Drew (Spider-Woman, en fuite, désormais membre des Vengeurs rebelles)",
            "Natasha Romanoff (la Veuve Noire, après avoir quitté les Vengeurs)",
            "Steve Rogers (Captain America)",
            "Sam Wilson (Le Faucon)",
            "Brent Jackson (désormais à la tête de Weapon X)",
            "Wendell Vaughn (Quasar)",
            "Comtesse Valentina De Fontaine",
            "Alexander Pierce",
            "Carol Danvers (Captain Marvel)",
            "Yelena Belova (la Veuve Noire)",
            "John Walker (U.S. Agent)",
            "Gwen Stacy (Spider-Gwen)",
            "Scott Lang (Ant-Man)",
            "Hope van Dyne (Guêpe)",
            "Flash Thompson (Agent Venom)",
            "Peter Parker (Spider-Man)",
            "Clay Quatermain (tué)",
            "Daisy Johnson (désormais membre des Secret Warriors de Fury)",
            "Barbara Morse (Agent 19, Oiseau moqueur)",
            "Richard et Mary Parker (tués en mission secrète)",
            "Jasper Sitwell",
            "Gabriel Jones (ancien des Howling commandos)",
            "Phil Coulson (nouveau directeur du SHIELD)",
            "Clint Barton (Œil-de-faucon)",
            "Raven Darkhölme (Mystique, désormais membre des X-Man)",
            "Isabella Hartley (décédée)",
            "Lance Hunter (en) (ancien agent de l'agence anglaise S.T.R.I.K.E.)",
            "Kara (Agent 33, mais agent de l'HYDRA après un lavage de cerveau et tuée)",
            "Victoria Hand (haut gradé niveau 9, tuée par Ward)",
            "Grant ward (affilié a l'équipe de Coulson mais agent d'HYDRA loyal a John Garrett)",
            "Melinda May (bras droit de Philipe Coulson)",
            "Jemma Simmons (affiliée a l'équipe de Coulson)",
            "Léopold Fitz (affilié à l'équipe de Coulson)",
        ],
        "historique": "Le SHIELD a été créé par Howard Stark à la fin de la Seconde Guerre mondiale pour remplacer la Section Scientifique de Réserve, au départ comme une simple agence de contre-espionnage pour maintenir la paix, mais il abandonna le projet car le gouvernement américain n'était pas convaincu. Pourtant, un comité des Nations unies ressortit le projet du placard discrètement, intégrant Nick Fury en tant que directeur des opérations (directeur adjoint, ou deuxième dans l'organisation). L'organisation était alors une agence d'espions, très bien équipée et sous juridiction de l'ONU. Elle possédait entre autres dans les années 1960 un mini-héliporteur nommé « Behemoth ». C'est aussi le SHIELD qui développa la technologie des LMD (Life Model Decoy ou Simulacre de vie modélisée), des androïdes copies conformes d'une personne. Certains furent utilisés contre le SHIELD, remplaçant des membres importants, jusqu'à ce que Fury ne découvre l'infiltration organisée par le Zodiaque. Dans le cadre de ses activités, le SHIELD fut chargé de stopper Godzilla dans les années 1970 et construisit dans ce but un robot géant nommé Red Ronin. La sécurité du siège des Nations unies à New-York dépend de sa seule juridiction et ses forces peuvent être employées comme Force de maintien de la paix des Nations unies.",
    },
    {
        "nom_equipe": "Sinister_Six",
        "logo_equipe": "Sinister_Six_logo.png",
        "img_membres": "Sinister_Six.jpg",
        "membres_equipe": ["Docteur Octopus",
            "le Vautour",
            "Electro",
            "Kraven le chasseur",
            "Mystério",
            "l'Homme-Sable",
            "le Super-Bouffon"],
        "historique": "Le premier membre à « rejoindre » l'équipe était Flint Marko, alias William Baker, alias l'Homme-Sable, après avoir été battu par Peter Parker et Silver Sable pendant le plan de Doc Ock pour reprendre la Terre. Le « grain de sable de l'âme» de l'Homme-Sable a été extrait et enfermé dans le Baxter Building. Otto a réussi à obtenir ce grain et le mettre dans son laboratoire secret.Le second élément était Maxwell Dillon, alias Electro , qui, après avoir été lancé dans l'espace par Thor, est revenu sur Terre pour se venger, cependant, Thor et Spider-Man ont été en mesure de l'arrêter et de le vaincre. Electro a été enfermé dans le laboratoire sous-marin d'Otto.Le troisième membre était Dmitri Smerdiakov, alias le Caméléon, qui, après son implication dans le plan de Doc Ock pour détruire la Terre, a été mis en détention sous la surveillance du SHIELD. Otto avait besoin de lui pour son équipe, alors il l'a fait transférer et l'a emprisonné dans son laboratoire sous-marin à la place.Le quatrième membre était Mysterio, nouvelle dans le monde des super-vilains. Otto prit Mysterio en volant une banque, d'abord le prenant pour Quentin Beck, le Mysterio originel, qui le livrait dans son plan pour détruire la Terre. Mais après avoir vu son visage, il a réalisé son erreur, mais Otto emprisonne quand même Mysterion aux côtés des autres.Le cinquième et dernier membre était Adrian Toomes, alias le Vautour. Après la première rencontre de Otto avec Toomes en tant que Spider-Man, le Vautour a cherché à se venger avec d'autres victimes de la brutalité retrouvée de Spider-Man. Mais il a été encore une fois vaincu, et pris par Otto pour être enfermé parmi les quatre autres méchants dans son laboratoire sous-marin secret.Dr Edward Lansky, alias le Lightmaster, les yeux fixés sur Alchemax, a leur dernière invention ; un dispositif qui peut travailler en harmonie avec ses propres pouvoirs à base de lumière. Lightmaster a engagé les Démolisseurs pour voler, cependant, Spider-Man les a contré avec son équipe retrouvée, es Superior Six. Spider-Man a perdu son contrôle mental sur les membres (en raison de Sun Girl qui a lancé l'attaque) et ils se sont retournés contre lui."

    }
]


const rootequipes = document.getElementById("root-equipes");

equipes.map(equipe => {
    const ficheEquipe = document.createElement('div');
    ficheEquipe.setAttribute('class', 'ficheEquipe');

    const nomEquipe = document.createElement('h1');
    nomEquipe.textContent = equipe.nom_equipe;
    
    const logoEquipe = document.createElement('img');
    logoEquipe.src = 'img/' + equipe.logo_equipe;
    
    const imgMembres = document.createElement('img');
    imgMembres.src = 'img/' + equipe.img_membres;
    
    const membresEquipe = document.createElement('ul');
    equipe.membres_equipe.map(membres_equipe =>{
        const li = document.createElement('li');
        li.textContent = membres_equipe;
        membresEquipe.appendChild(li);
    })
    const hist = document.createElement('p');
   hist.textContent = equipe.historique;


    rootequipes.appendChild(ficheEquipe);
    ficheEquipe.appendChild(nomEquipe);
    ficheEquipe.appendChild(logoEquipe);
    ficheEquipe.appendChild(imgMembres);
    ficheEquipe.appendChild(membresEquipe);
    ficheEquipe.appendChild(hist);
    
})