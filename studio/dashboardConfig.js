export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6252d4fa57aa6272e9d1ea41',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-a28yyb39',
                  apiId: '9b08430d-b427-4715-9a6b-0315033b6707'
                },
                {
                  buildHookId: '6252d4fbdc23b17c677cc80a',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-oced2hja',
                  apiId: '4db5c98b-8730-4cb1-8f15-a5c3389f5fb4'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/markm247/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-oced2hja.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
