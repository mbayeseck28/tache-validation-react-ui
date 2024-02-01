
const Thead = ({thead}) => {
    return (
        <thead>
            <tr class="text-md text-center font-semibold tracking-wide text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                {thead.map((th, index) => (
                    <th key={index} class="px-4 py-3">{th}</th>
                ))}
            </tr>
        </thead>
    )
}

const Tbody = ({tbody, actions}) => {
    return (
        <tbody className='bg-white'>
            <tr class="text-gray-700">
                {tbody.map((td, index) => (
                    <>
                    <td class="px-4 py-3 text-ms font-semibold border">{td.id}</td>
                    {td.article ? 
                        <td class="px-4 py-3 border">
                        <div class="flex items-center text-sm">
                        <div class="relative w-8 h-8 mr-3 rounded-full md:block">
                            <img class="object-cover w-full h-full rounded-full" src={td.article.src} alt="" loading="lazy" />
                            <div class="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                            <p class="font-semibold text-black">{td.article.nom}</p>
                            <p class="text-xs text-gray-600">{td.article.desc}</p>
                        </div>
                        </div>
                    </td> : null
                    }
                    <td class="px-4 text-center py-3 text-md border">
                        <span class="px-2 py-1 font-semibold leading-tight text-orange-700 bg-gray-100 rounded-sm">{td.quantite}</span>
                    </td>
                    <td class="px-4 py-3 text-ms font-semibold border text-center">
                        {actions.map((action) => (
                            <button className={`${action.color} p-1 text-white rounded ml-2`} onClick={action.hanldleClick}>{action.icon}</button>
                        ))}
                    </td>
                    </>
                ))}
            </tr>
        </tbody>
    )
}

const Table = ({thead, tbody, actions}) => {
  return (
    <section class="container mx-auto  font-mono">
        <div class="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div class="w-full overflow-x-auto">
            <table class="w-full">
              <Thead thead={thead} />
              <Tbody tbody={tbody} actions={actions} />
            </table>
          </div>
        </div>
      </section>
  )
}

export default Table
