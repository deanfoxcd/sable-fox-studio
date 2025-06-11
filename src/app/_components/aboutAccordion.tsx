import {
  Accordion,
  AccordionContent,
  AccordionPanel,
  AccordionTitle,
} from 'flowbite-react';
import { customTheme } from '../styles/themes';

const AboutAccordion = () => {
  return (
    <Accordion
      className='mt-16 mx-50'
      theme={customTheme.accordion.root}
    >
      <AccordionPanel flush={true}>
        <AccordionTitle theme={customTheme.accordion.title}>
          My Home
        </AccordionTitle>
        <AccordionContent theme={customTheme.accordion.content}>
          <p>
            I’ve made my home here in the lovely mountains of Tennessee,
            surrounded by misty beauty and the seclusion that only a mountain
            valley can bring. My husband is from South Africa, and so half of my
            heart lies in the coastal beauty and lush jungles of Africa where my
            family resides. When I’m not cozy in the studio I love to hike with
            my dog in the Smokies, take photos on film, longboard along new
            paths, meander in antique stores, and rock out at a favorite
            concert.
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle theme={customTheme.accordion.title}>
          My Furry Friends
        </AccordionTitle>
        <AccordionContent theme={customTheme.accordion.content}>
          <p>
            Meet Murphy, my precious little Shetland Sheepdog. With constant
            energy and never-ending games of fetch this pup gets me off the
            couch and out into nature every day. His favorite things include
            lipping every water bowl in sight just for kicks, wearing bandannas,
            going to coffee shops for a pup cup, and joining me on a daily walk
            in the morning mist. I couldn’t ask for a better dog.
          </p>
          <p>
            Bob, originally a barn cat for seven years on my family farm, has
            now found his home with us in the lap of luxury. Never have I known
            a cat to be so needy, constantly wanting belly rubs and snuggling
            with us. Every evening he can be found curled up between us on the
            couch while we have our nightly cup of tea. Who knew that a cat
            could be so clingy and cuddly?
          </p>
        </AccordionContent>
      </AccordionPanel>
      <AccordionPanel>
        <AccordionTitle theme={customTheme.accordion.title}>
          A Few of My Favorite Things
        </AccordionTitle>
        <AccordionContent theme={customTheme.accordion.content}>
          <ul>
            <li>The earthy smell of a forest floor.</li>
            <li>The squeak of a leather saddle on the back of a horse.</li>
            <li>
              The thrill of having a slobbery tennis ball returned to you by the
              dog you love.
            </li>
            <li>
              Coming across a wild animal around the corner and staring into
              each others’ eyes, transfixed and holding our breath.
            </li>
            <li>Fresh cookies straight out of the oven.</li>
            <li>
              Laughing on the couch under a cozy blanket watching comedies with
              my husband.
            </li>
          </ul>
        </AccordionContent>
      </AccordionPanel>
    </Accordion>
  );
};

export default AboutAccordion;
