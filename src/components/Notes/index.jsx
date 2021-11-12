import React from 'react';

import './style.css';

const Lore = props => {
  React.useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const componentClass = 'lore';

  return (
    <div className={componentClass} id={componentClass}>
      <div className={`${componentClass}_wrapper`}>
        <h2>{'Daily Notes'}</h2>
        <div className={`${componentClass}_content`}>
          <div className={`${componentClass}_item`}>
            <h4>{'Record 1: '}</h4>
            <div className={`${componentClass}_item-text`}>{'The Keirrat desert seemingly completely unsuitable for life in fact after the Great Migration is almost teeming with it but not quite in the usual sense. While a sandstorm rages over the silent dunes in the depths of the sandstone, in the crevices of the rocks and under the aeolians the axolotls continue their beginning only occasionally appearing to the surface, where there is an unbearable heat during the day and a horrible cold at night meets them.'}</div>
          </div>
          <div className={`${componentClass}_item`}>
            <h4>{'Record 2: '}</h4>
            <div className={`${componentClass}_item-text`}>{'Organisms of most of the Dravolinn inhabitants according to the behests of their Draconid ancestors have incredible endurance. And not casual because severe storms force them to fight with the ruthless force of nature day after day their claws deftly cling to stones and their tails masterfully sweep traces. Their metabolism is aimed at conserving energy, the color of the body is predominantly yellow and gray adapted to the colors of local stones scattered on all surfaces. They build their dwellings in small crevices located in mountain ranges which gives them protection from the wild wind. When the rainy season comes to these lands axolotls cover their burrows with small pebbles. Sometimes in the open spaces there are unusual round-shaped semi-translucent stones which bring numerous tornadoes. Resourceful axolotls use these gifts of nature as a gift to their relatives.  They do this after the storm season as a token of gratitude: sometimes the axolotl does not have time to equip itself a safe home then others come to its aid. Then the rescued axolotl gives this unusual gift stone to virtues.'}</div>
          </div>
          <div className={`${componentClass}_item`}>
            <h4>{'Record 3: '}</h4>
            <div className={`${componentClass}_item-text`}>{'In the west of the Finds-Islands archipelago along a warm sea dotted with bizarre corrals of all shapes and colors there is a ridge of sheer cliffs sharp like the teeth of an ancient dragon. Between them are amazing vines glowing in the night. It seems that even a small blade of grass cannot find its piece of land here. Clinging to protruding stones trees of stunning beauty grow here the crowns of which are adorned with hundreds of small purple flowers emitting the sweet incense that attracts the axolotls living in this region.  Dozens of different species of birds build their simple nests on inaccessible peaks, their singing merges into one euphonious symphony.  At night this exotic place looks especially unusual: soft moonlight seeping between the rocks, a slightly noticeable bluish glow from shimmering vines and a gentle warm breeze blowing from the side of the Keirrat desert. All this creates its own special, such a magical and serene atmosphere here.'}</div>
          </div>
          <div className={`${componentClass}_item`}>
            <h4>{'Record 4: '}</h4>
            <div className={`${componentClass}_item-text`}>{'The rocky plains of the Dravolinn are truly amazing for their silent beauty. They are notable for the fact that the first axolotls settled here and for good reason because the nature of this region is in its own way attractive and harsh at the same time. In the middle of the mainland the Alterac steppe stretches from west to east, on its expanses like the remnants of a former civilization there are huge stone pillars. Weathering which continues to this day turned the once mighty mountains into scattered blocks of stone standing alone among the void. At first glance it may seem that this amazing place is not fraught with dangers, it seems that time has stopped here ... However this is not the case, periodic storms coming from the White Sea shake these ancient lands.  The local inhabitants have long been accustomed to such conditions: a carefree fine day at any moment can turn into a ruthless hurricane that sweeps away everything in its path.'}</div>
          </div>
          <div className={`${componentClass}_item`}>
            <h4>{'Record 5: '}</h4>
            <div className={`${componentClass}_item-text`}>{'In the strong north of Dravollin, along the Faded Sea there is an evergreen tundra.  Wide trunks of thorny trees rush high up, on their tops thick layers of snow lie. Strong winds blow through the entire ice-bound shore. However in some parts of the tundra everything is quiet and calm - powerful trees take the full blow of this element sheltering defenseless axolotls from the chilly elements. Axolotls settled here not so long ago, the climate of this region is not particularly suitable for them. However there is something to feast on: under the covers of snow they can find large bright red berries - the main local dish. Axolotls create their shelters right in the trunks of trees: tearing off the bark with tenacious paws they get to the center of the tree and create their cozy home. In a blizzard they cling to each other to not allow the cold to overcome themselves one by one.'}</div>
          </div>
          <div className={`${componentClass}_item`}>
            <h4>{'Record 6: '}</h4>
            <div className={`${componentClass}_item-text`}>{'Along the southern shore of Dravollin lies the Mossy Plain. For centuries mossy boulders and a few trees grow on its expanses. Deciduous forests are found a little to the east. Unlike the stony steppes in the center of the mainland and the tundra in the strong north this warm and humid region is not familiar with destructive storms and strong winds, so it is on this land that most axolotls preferred to create their homes.'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lore;