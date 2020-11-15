import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    assets: [
      {
        id: 'logo',
        image: require('../assets/DEMOSITE.svg')
      },
      {
        id: 'UI/UX Design',
        image: require('../assets/alexandra-gorn-VBo24-Ys6gQ-unsplash 1 1.jpg')
      },
      {
        id: 'offer1L',
        image: require('../assets/umbrella.svg')
      },
      {
        id: 'offer1R',
        image: require('../assets/bruno-cervera-YH7mGnigHRs-unsplash_1_1.jpg')
      },
      {
        id: 'offer2R',
        image: require('../assets/vandan-patel-vfiuGpL9fiU-unsplash_1_1.jpg')
      }
    ],
    generatedText: [
      {
        id: 1,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vitae purusfaucibus ornare suspendisse sed nisi lacus sed viverra. Nisi est sit amet facilisis magna etiam. Sit amet nisl purus in mollis nunc sed id semper.Cursus metus aliquam eleifend mi in nulla. Augue lacus viverra vitae congue eu. Amet luctus venenatis lectus magna fringilla. Sodales ut etiamsit amet nisl purus in mollis. Quam id leo in vitae. Laoreet id donec ultrices tincidunt. Nam libero justo laoreet sit amet cursus sit. Consequatinterdum varius sit amet mattis vulputate. Justo eget magna fermentum iaculis. Sit amet nisl purus in mollis nunc sed. Ornare lectus sit amet estplacerat in egestas. Ut diam quam nulla porttitor massa id neque aliquam. Et tortor consequat id porta nibh venenatis cras sed felis. Habitasseplatea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. At volutpat diam ut venenatis tellus in metus. A condimentumvitae sapien pellentesque habitant morbi.'
      },
      {
        id: 2,
        text: 'Blandit libero volutpat sed cras ornare arcu dui vivamus. Leo urna molestie at elementum eu facilisis sed odio. Lacinia at quis risus sed. Idaliquet risus feugiat in ante. Congue mauris rhoncus aenean vel elit scelerisque mauris pellentesque. Tortor aliquam nulla facilisi crasfermentum odio eu feugiat pretium. Ultricies leo integer malesuada nunc. Justo nec ultrices dui sapien eget. Velit sed ullamcorper morbitincidunt ornare massa. Leo in vitae turpis massa. Suspendisse in est ante in nibh mauris cursus mattis. Mi proin sed libero enim sed.'
      },
      {
        id: 3,
        text: 'Quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. In hendrerit gravida rutrum quisque non tellus orci ac auctor. Pellentesque eliteget gravida cum sociis natoque penatibus. Sit amet aliquam id diam maecenas ultricies. Cras sed felis eget velit aliquet sagittis id. Leo in vitaeturpis massa sed. Aliquam etiam erat velit scelerisque in dictum. Purus sit amet volutpat consequat mauris nunc congue nisi. Egestas dui id ornare arcu odio ut. Nisi porta lorem mollis aliquam. In cursus turpis massa tincidunt dui ut ornare lectus sit. Neque aliquam vestibulum morbiblandit cursus risus at ultrices mi. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit eget gravida. Vitae justo eget magna fermentum iaculis eu non. Nascetur ridiculus mus mauris vitae ultricies leo. Pulvinar elementum integer enim neque volutpat ac tincidunt vitae.Consequat ac felis donec et odio pellentesque diam volutpat commodo. Tortor posuere ac ut consequat.'
      },
      {
        id: 4,
        text: 'Orci porta non pulvinar neque laoreet suspendisse interdum. Nunc scelerisque viverra mauris in aliquam sem. Sit amet facilisis magna etiam tempor orci eu lobortis. Odio pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus. Purus in mollis nunc sed id semperrisus in hendrerit. Ac tortor vitae purus faucibus. Felis bibendum ut tristique et egestas quis ipsum. Erat pellentesque adipiscing commodo elit atimperdiet dui accumsan sit. Nec dui nunc mattis enim ut. Eget magna fermentum iaculis eu non. Mi bibendum neque egestas congue quisque egestas diam. Pharetra magna ac placerat vestibulum lectus mauris ultrices. Varius duis at consectetur lorem donec massa sapien. Mattis enim ut tellus elementum sagittis vitae et leo duis. Pulvinar proin gravida hendrerit lectus. Massa eget egestas purus viverra accumsan in nisl nisi.'
      },
      {
        id: 5,
        text: 'Sodales ut etiam sit amet. Sagittis id consectetur purus ut. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Sodales ut etiamsit amet nisl purus in mollis. Diam maecenas ultricies mi eget mauris. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Nibh cras pulvinar mattis nunc sed blandit libero volutpat sed. Ipsum dolor sit amet consectetur. Adipiscing diam donec adipiscing tristique risus nec feugiat in. Tellus in metus vulputate eu scelerisque felis imperdiet proin. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim cras. Mauris cursus mattis molestie a iaculis at.'
      }
    ]
  },
  getters: {
    getAsset: state => id => {
      const asset = state.assets.find(assets => assets.id === id)
      return asset.image
    },
    getParagraph: state => id => {
      const p = state.generatedText.find(generatedText => generatedText.id === id)
      return p.text
    }
  },
  mutations: {
  },
  actions: {
  }
})
