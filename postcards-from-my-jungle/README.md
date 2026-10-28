# FIELD NOTES FROM ELSEWHERE — IMMERSIVE 

## Hosted Site: https://maiaarrais.github.io/CART498-GenAI/postcards-from-my-jungle/

This project didn't really go the way I originally planned, but I think that made it more interesting.

I started by training a diffusion model using a dataset of real animals in Google Colab. The idea was to see if the model could learn from different animals and eventually create creatures that didn't actually exist. However, I ran into some problems with Colab's GPU limitations. I couldn't train the model for as long as I wanted, and the images it generated were extremely noisy. You could barely recognize anything in them, let alone an animal.

Instead of throwing those images away, I decided to work with what I had. I used ChatGPT to help create animal-like silhouettes inspired by different species, then used my original diffusion images as textures inside them. This way, I could turn something that initially looked like a failed experiment into part of the final design. I ended up with 16 fictional creatures, some belonging to a jungle and others to an underwater environment.

For the sounds, I used Stable Audio Open in Google Colab. I created different prompts based on what I imagined each creature would sound like, experimenting with things like chirps, whistles, clicks, and underwater noises. I also used ChatGPT to come up with a fictional animal language, giving each creature its own phrase.

I brought everything together in an interactive webpage where visitors can explore the environments, discover animals, and hear their sounds.

If I had more time and GPU access, I would experiment with longer training, different datasets, and higher image resolutions. For the audio, I would try more prompts and variations to play with the output of each animal sound. 

I used the paid version of ChatGPT (Plus) for image development, coding, fictional language and Google Colab for the diffusion experiments and sound generation.