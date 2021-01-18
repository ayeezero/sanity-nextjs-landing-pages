export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '6005457ab454fcb444585302',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-z5yvtiw5',
                  apiId: 'e35ef369-251d-4571-adac-9bda4d90c146'
                },
                {
                  buildHookId: '6005457a2191b4bff5baf64e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ei6s5rmg',
                  apiId: '06a7228b-5cc7-4cef-87f3-8c5fc1e93c0e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/ayeezero/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ei6s5rmg.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
