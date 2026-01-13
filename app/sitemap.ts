import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://sekongo-bienvenu.vercel.app'

    // Routes statiques
    const routes = [
        '',
        '/about',
        '/skills',
        '/projects',
        '/contact',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: route === '' ? 1 : 0.8,
    }))

    // Idéalement, on récupérerait aussi les slugs des projets dynamiquement ici
    // Pour l'instant on ajoute les statiques connus
    const projects = [
        'volaille-du-belier',
        'oba-lii',
        'repertoire-plus'
    ].map((slug) => ({
        url: `${baseUrl}/projects/${slug}`,
        lastModified: new Date(),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    }))

    return [...routes, ...projects]
}
