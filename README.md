# smallworld

_This is a template for the static site generator [Astro](https://astro.build/). Now updated for Astro 7!_

I like Astro, but I don't like spending hours customizing styles. I made this template based on a few key principles:

- I want a basic website with a single-author blog.
- The website should incorporate accessible and usable elements.
- Avoid complex systems, prefer simpler ones.
- Things I see should be easy to understand.

The result is an Astro template that barely uses CSS classes, and maximizes the use of semantic HTML.
It not only makes for a functional site, but is also great to start learning how Astro works!

## Quickstart

```shell
npm create astro@latest -- --template anaxite/astro-smallworld
cd astro-smallworld
npm run dev
npm run build
```

## Less quick start

### Install

1. Install Astro:

```shell
npm create astro@latest -- --template anaxite/astro-smallworld
```

2. Install this template's dependencies, if you didn't already:

```shell
cd <install-directory>
npm install
```

3. Run the template in preview mode, or build the final output.

```shell
npm run dev
npm run build
```

4. Optionally, format your source files with Prettier.

```shell
npm run format
```

### Configure site settings

Site-wide settings are stored in `src/settings.ts`. This is also where you can set the favicon file name, and Open Graph image settings.

### Configure CSS

The file `src/styles/main.scss` controls which CSS elements Pico CSS includes in the final site. See [the Pico CSS website](https://picocss.com/docs/sass) for information about these elements. 

> A site build may show Pico CSS warnings. These warnings are generally non-fatal and can be ignored. 

### Add and edit pages

Create your static pages as `.astro` files under `src/pages`. The template includes an index page with the most recent blog posts, an About page, and a 404 page.

Use the Base layout to wrap your content in semantically-correct `<main>` tags. The Base layout also takes `title` and `description` attributes that supplement the main site title and description. If you want your content to have a nice border, I recommend you wrap it in `<article>` tags to benefit from Pico CSS styling.

To start with a basic page template, see the file in `src/templates`.

### Edit navigation

To add a page to the site navigation, edit the `PageHeader.astro` component directly.

### Blog

smallworld comes with a blog collection by default. To add a new post, create a Markdown file in the `src/content/blog` directory or one of its subdirectories. The path and file name becomes the post URL.

A post must have `title`, `description` and `pubDate` keywords in its frontmatter. `tags` are optional.

To see a post template, see the file in `src/templates`.

## Notes

For your convenience, I added a few tooling things:

- Any Node.js package manager supported by Astro should work. I include a bit of PNPM config by default.
- This project comes with a `mise-en-place` configuration file.

## About Astro

Want to learn more about Astro? Check out [their documentation](https://docs.astro.build) or jump into their [Discord server](https://astro.build/chat).


# Astro Typo FR

_Ceci est un modèle pour le générateur de site statique [Astro](https://astro.build/). Maintenant mis à jour pour Astro 7 ! _

J'aime Astro, mais je n'aime pas passer des heures à personnaliser les styles. J'ai créé ce modèle sur la base de quelques principes clés :

- Je veux un site Web basique avec un blog d'un seul auteur.
- Le site Web doit inclure des éléments accessibles et utilisables.
- Évitez les systèmes complexes, préférez les systèmes plus simples.
- Les choses que je vois devraient être faciles à comprendre.

Le résultat est un modèle Astro qui utilise à peine des classes CSS et maximise l'utilisation du HTML sémantique.

Ce n'est pas seulement un site fonctionnel, mais c'est aussi génial de commencer à apprendre comment fonctionne Astro !

## Démarrage rapide

```shell
npm create astro@latest -- --template andre-vincent/typo-fr
cd astro-petit monde
npm run dev
npm run build
```

## Démarrage moins rapide

### Installer

1. Installer Astro :

```shell
npm créer astro@latest -- --template anaxite/astro-smallworld
```

2. Installez les dépendances de ce modèle, si vous ne l'avez pas déjà fait :

```shell
cd <répertoire-installation>
install npm
```

3. Exécutez le modèle en mode aperçu ou créez la sortie finale.

```shell
npm run dev
npm run build
```

4. En option, formatez vos fichiers sources avec Prettier.

```shell
npm run format
```

### Configurer les paramètres du site

Les paramètres à l'échelle du site sont stockés dans `src/settings.ts`. C'est également là que vous pouvez définir le nom du fichier favicon et les paramètres de l'image Open Graph.

### Configurer le CSS

Le fichier `src/styles/main.scss` contrôle les éléments CSS que Pico CSS inclut dans le site final. Voir [le site Web Pico CSS](https://picocss.com/docs/sass) pour plus d'informations sur ces éléments.

> Une construction de site peut afficher des avertissements Pico CSS. Ces avertissements sont généralement non mortels et peuvent être ignorés.

### Ajouter et modifier des pages
