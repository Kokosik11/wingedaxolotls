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
        <h2>{'Lore'}</h2>
        <div className={`${componentClass}_content`}>
          <div className={`${componentClass}_item`}>
            <h4>{'Prologue'}</h4>
            <div className={`${componentClass}_item-text`}>{'Ambistomid, the world previously warm and serene now almost outlived its usefulness. The planet located at a considerable distance from its paired suns before bloomed and smelled differently, completely differently.'}</div>
            <br />
            <div className={`${componentClass}_item-text`}>{'Even during the existence of a giant mono-continent called Estasia the protoaxolotls settled throughout the then world, not reaching only the most remote corners of the planet. The animals are coastal but almost blind they tried to be protected by giant reefs which in turn live by absorbing bacteria that live closer to thermal springs. However over time being in fact rudimentary the third pair of limbs began to resemble fins helping to swim faster, and in rare cases, to dive out of the water at speed. As conditions changed the protoaxolotls became more and more graceful and the fins-wings became larger and stronger giving great advantages to their owners until they were allowed to turn an elongated jump into a flapping flight at one point. From that moment the countdown of a new chapter in the history of axolotls began. The plates of the planet, driven by eternal streams of heat moved along their own routes known only to them. Constant geothermal activity warmed the planet from the inside.\n'}</div>
            <br />
            <div className={`${componentClass}_item-text`}>{'Centuries passed, geology changed and geography with it. The underground crust floated dividing Estasia into 4 torn pieces. The environment itself followed the slabs followed by the ancestors of the axolotls. Time passed, landscapes and species of creatures and plants inhabiting a wonderful world, so lonely in the whole Axoverse and at the same time so alive changed.'}</div>
          </div>
          <div className={`${componentClass}_item`}>
            <h4>{'Among dragons and wyverns'}</h4>
            <div className={`${componentClass}_item-text`}>{'It is known for certain that the first continent to break off was Dravolin (DRAco VOLans LINNaeus) which became home to the Draconid axolotl genus. Breaking away from the eastern part of Estasia it extends from the north edge and goes far beyond the equator. The harsh semi-tundra of this continent smoothly flows into the stony steppes and from there into the sultry plains in the south. The poor variety of life coupled with difficult conditions gave rise to this genus of axolotls which are extremely hardy and resistant to external influences. The bodies representative of this genus are covered with strong scales,and the membranous wings are crowned with sharp tips on the lunges'}</div>
          </div>
          <div className={`${componentClass}_item`}>
            <h4>{'Demonic nature'}</h4>
            <div className={`${componentClass}_item-text`}>{'Separating from the parent continent Dravolin pulled hundreds and thousands of separate patches of land also boiling with life thereby laying out an interrupted path from the islands to Estasia. The name of this path is the Fiends-Islands Archipelago. Unlike its eastern neighbor the landscape here is less depressing - the islands cross mountain ranges in all directions, the peaks of the mountains stretch upward through the clouds. Through the massifs there are countless natural channels filled with sea water. The local inhabitants partly resemble their Draconic counterparts with curve membranous wings topped with single thorns but their appearance is deceiving - their wings are smaller, their swing is more frequent and their temper is more cunning. Most of them are loners however there are also collective representations with a clear hierarchy.'}</div>
          </div>
          <div className={`${componentClass}_item`}>
            <h4>{'Angel duet'}</h4>
            <div className={`${componentClass}_item-text`}>{'The last to leave the former Estazia New-Angeles - a pair of large offshoots of land, connected by a thin isthmus. The newly made continent consists mainly of mountain ranges in places separated by fast rivulets. Rare fields and plains turning into hills and then majestic mountains are covered with modest dry vegetation. Sandy white, yellow and pebble shores washed by warm currents have become a refuge for Angelic axolotls. Spending most of the time on pearl-colored stones near the water these axolotls are remarkable for the structure of their body - the feathered compact wings easily fold into a dorsal fold and their body extremely flexible and smooth is capable of emitting a barely noticeable whitish light in the dark. Thousands of mountain needles piercing the skies above this piece of land have become the habitat of archangel axolotls. The older brothers unlike their coastal relatives prefer the height of the mountains and the peace of ancient rocks. Their impressive wings consisting of large feathers warm their owners in bad weather and their bloom scales sharp like local stones reliably protect from any external influences. Like their "down-to-earth" colleagues the bodies of these majestic creatures are capable of emitting light that comes out in concentrated clots from under the scales.'}</div>
          </div>
          <div className={`${componentClass}_item`}>
            <h4>{'Promised lands'}</h4>
            <div className={`${componentClass}_item-text`}>{'At that hour the former middle and now the giant bay of the parent continent left after the breakaway of New-Angeles was changing. Moving a respectable distance Dravolin distorted the dank current running from the northeast to the southwest and took all the cold with its elongated rocky shores. Now when New Eden is the central remnant of the former Estasia nothing cooled the nature in the turbulent warmth and began to play with new colors. Having divided the bay according to the southern polis the Keirrat desert divided the land into two parts: the northern one which is subject to Butterfly axolotls and the southern one which belongs to the Dragonite axolotls. Most of the north is warm plains with vast fields and green hills smoothly turning into mountain formations and ending with coniferous forests in the strong north. The south is full of impassable jungles and tropical swamps with rare hills of land. This part of the bay closer to its pole breaks off into a dead arid desert near the ocean. The inhabitants of the north are free, graceful and unhurried. Their beautiful lamellar wings the largest among relatives are divided in pairs and the body is covered with crystalline nectar scales that shoot glare in the sun. Their southern counterparts in response can boast of the highest speed and mobility due to two pairs of the fastest monoplastic wings which is undoubtedly due to their rapidly changing habitat conditions. As for the cover the bodies of the Dragonites are as smooth as possible in order to have maximum permeability in a tropical windbreak and the wings are covered with a repulsive gel that allows to reject foreign particles and keep the wings always in perfect cleanliness.\n'}</div>
          </div>
          <div className={`${componentClass}_item`}>
            <h4>{'Morning sun never lasts a day'}</h4>
            <div className={`${componentClass}_item-text`}>{'But not only life is subject to change. The constant activity of the bowels has turned the cold desert into a piece of summer among the endless expanses of space. Gave life to the planet itself, mixing chemical ingredients into a weird cocktail for millions of years. This same activity now threatened to take life. The shifted balance of the earth\'s crust caused by the movement of the plates now spewed out only destructive heat in some places while in others it gave rise to a fierce frost. Crazy balance of the universe. Conditions are critical enough to force life to seek new paths. Migration of the now dominant species was not long in coming.'}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Lore;