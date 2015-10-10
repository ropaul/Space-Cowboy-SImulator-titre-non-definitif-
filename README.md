# Space-Cowboy-Simulator-titre-non-definitif-
Projet en Environnement Virtuel , Interaction et Jeux Vidéo (EVIJV)

Cahier des charges
Space Cowboy Simulator
(titre non définitif)




Yann Teddy ROPAUL
Corentin ARNAUD



Concept :
Le jeu est un jeu de simulation de vol et de tir, en 3D, contre un ou plusieurs adversaires. Le jeu est basé sur le mode multijoueur de star fox 64  (exemple : https://www.youtube.com/watch?v=VJrg7HhWW1k )

StoryBoard :
Le joueur contrôle un vaisseau spatial. Il peut diriger son vaisseau dans tous les sens dans le plan où le vaisseau se trouve. Il peut changer le plan où se trouve le vaisseau mais l'inclinaison du vaisseau sera toujours la même (comme dans star fox).
Le jeu se déroule dans une arène fermée. Le joueur pourra tirer des rayons laser. La technologie de ray-casting sera utilisée pour déterminer ce que touchent les rayons laser.
Le joueur a une barre de vie qui descend si on lui tire dessus.
Le joueur sera confronté à plusieurs IA qui contrôlent des vaisseaux évoluant dans la même arène, ces vaisseaux pouvant être alliés, neutres ou ennemis.
Le but du joueur sera de tirer et de détruire les vaisseaux adverses tout en restant en vie.


Histoire :
Le héros (ou héroïne , on ne sait pas , on ne voit qu'un vaisseau) veut conquérir l'univers. Pour cela il commence petit, avec son unique vaisseau, sans alliés, et en se battant dans des combats 1v1. Au fur et à mesure, il  tentera d’améliorer son vaisseau, de former des alliances et d'augmenter sa réputation. Pour ce faire il combattra des ennemis de plus en plus nombreux et coriaces.


Interaction :  
Le joueur peut interagir avec les autre vaisseaux, les attaquer (au laser ou en les percutant), se coordonner avec ces alliés et échanger matériaux, équipement ou énergie.
Il peut aussi interagir avec le décor, il se déplace dans l'espace, peut faire varier sa vitesse, percuter ou détruire un obstacle, voir à travers (en fonction des équipement et des alliés qu'il possède) et récolter des matériaux.
Le joueur interagira avec son vaisseau, pour l'améliorer, créer ou acheter des équipements, et gérer  la distribution de son énergie.

Les interactions sont :
-les tirs : les vaisseaux peuvent tirer des lasers (ou autres projectiles) utilisant le ray casting pour s'orienter. Ces tirent ont pour effet de faire baisser la vie de ceux qui le reçoivent.
-  Les interactions avec le décors : Les vaisseaux sont blesser lorsqu'ils touchent les éléments de décors.
- les interactions de décors 2 : certains éléments de décors (exemple des astéroïdes, des débris spatiaux de navette, des satellites, etc) peuvent être détruit (et donc permettre plus de stratégie, selon la difficulté de la destruction de l'objet, sa circonférence , etc).
- les collectables : certains éléments du décors sont des powers-up ramassable. Il faut alors gérer interactions avec ces objets et leurs effets sur le jeux.
- la gestion de l'energie  : les vaisseaux ont deux jauges : une de vie et une d’énergie. La jauge d’énergie se vide lors de l'utilisation de certaines capacité. Il faut gérer ce paramètre.

OPTIONNEL
- Le bouclier : le bouclier utilise l’énergie pour se déployer. Il peut être activé après être « amasser ». Si le bouclier est activé, alors les tirs n'ont aucun effet sur le vaisseaux. Les dégât du décors sont aussi diminué.
- Le turbo : le turbo utilise l’énergie, il permet d'aller plus vite un cours laps de temps. Il sera aussi collectable.
- le rayon tracteur : utilise l’énergie, permet de cibler un vaisseaux (grâce au ray-casting) et de le tracter vers nous. Il sera aussi collectable.
-Don d’énergie : si un allié est assez proche, il peut nous visé (grâce au ray casting ) et nous donné de l'énergie. L'adversaire pourra se servir si il passe entre les deux vaisseaux durant le transferts.
- Différents type d'armes.
-Des vaisseaux avec différentes caractéristique de départ (vitesse , vitesse de rotations , puissance de feu, gestions des différents collectables,etc)

TRES OPTIONNEL
-Chef de meute : permet de donner des ordres à ses équipier (pour leurs demander del'énergie ou cibler un énemie)


Comportement de l'IA:
L'ia peut dans un premier temps être un agent réactif suivant des règles simples :
-si l'adversaire n'est pas devant lui , tenter d'aller derrière l’adversaire. (tourner ou faire demi-tour)
-si l'adversaire est devant, tenter de viser l’adversaire.
-si l'adversaire peut être touché, tirer sur l'adversaire.

Nous pouvons imaginer d'autre types d'IA, soit réactive, avec des règles plus intelligentes et mieux construites, soit cognitive, élaborant des plans afin de piéger son adversaire.



Objectif minimum :  Créer un arène simple, avec un fond étoilé qui permet de simuler la sensation de déplacement.  Quelque objets inertes ( astéroïdes). Vu en première personne. Créer un adversaire avec une IA réactive de base et mettre en œuvre toutes les interactions de déplacement et d'attaque.

Objectif moyen :  Créer des arènes plus complexes, plus grandes.  Créer une grande diversité d'objets, des vaisseaux avec des caractéristiques différentes ( vitesse, vitesse de rotation, force de frappe, visuel de vaisseau) . Ajouter de nouvelles caractéristiques/équipements ( bouclier, turbo, attaque spéciale, etc). Mettre en œuvre les interactions d'amélioration et de gestion du vaisseau et celles de récolte.

Objectif maximum :  Gestion des alliés, interaction de négociation et de coopération. Augmentation de la difficulté.
