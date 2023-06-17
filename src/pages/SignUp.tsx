import { useEffect } from 'react'
import Register from '../components/Register/Register'
import { useDispatch } from 'react-redux'
import { handleUserPosts } from '../redux/userSlice'

const usersData = [
  {
    name: 'john',
    avatar: 'https://xsgames.co/randomusers/assets/avatars/pixel/25.jpg',
    userPost: [
      {
        postContent:
          'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
        postSubText: 'yees ',
        comments: [],
      },
      {
        postContent:
          'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
        postSubText: 'yees ',
        comments: [],
      },
      {
        postContent:
          'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
        postSubText: 'yees ',
        comments: [],
      },
      {
        postContent:
          'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
        postSubText: 'yees ',
        comments: [],
      },
      {
        postContent:
          'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
        postSubText: 'yees ',
        comments: [],
      },
      {
        postContent:
          'https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg',
        postSubText: 'yees ',
        comments: [],
      },
    ],
    subscribers: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
    subscribedTo: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
  },
  {
    name: 'bart',
    avatar: 'https://xsgames.co/randomusers/assets/avatars/pixel/11.jpg',
    userPost: [
      {
        postContent:
          'https://www.befunky.com/images/prismic/f5ca4181-01da-4237-92bf-b6938359503e_hero-blur-image-5.jpg?auto=avif,webp&format=jpg&width=896',
        postSubText: 'finally',
        comments: [],
      },
    ],
    subscribers: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
    subscribedTo: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
  },
  {
    name: 'anyroast',
    avatar: 'https://xsgames.co/randomusers/assets/avatars/pixel/5.jpg',
    userPost: [
      {
        postContent:
          'https://www.wbcsd.org/var/site/storage/images/media/images/nature-action2/201159-1-eng-GB/Nature-Action_i1140.jpg',
        postSubText: 'no fortnite',
        comments: [],
      },
    ],
    subscribers: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
    subscribedTo: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
  },
  {
    name: 'anymelon',
    avatar: 'https://xsgames.co/randomusers/assets/avatars/pixel/32.jpg',
    userPost: [
      {
        postContent:
          'https://cdn.pixabay.com/photo/2014/02/27/16/10/flowers-276014_1280.jpg',
        postSubText: 'drink beer',
        comments: [],
      },
    ],
    subscribers: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
    subscribedTo: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
  },
  {
    name: 'misha',
    avatar: 'https://xsgames.co/randomusers/assets/avatars/pixel/1.jpg',
    userPost: [
      {
        postContent:
          'https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg',
        postSubText: 'dont drink beer',
        comments: [],
      },
    ],
    subscribers: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
    subscribedTo: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
  },
  {
    name: 'vasya',
    avatar: 'https://xsgames.co/randomusers/assets/avatars/male/60.jpg',
    userPost: [
      {
        postContent: 'https://wallpapershome.com/images/pages/ico_h/21485.jpg',
        postSubText: 'play football',
        comments: [],
      },
    ],
    subscribers: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
    subscribedTo: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
  },
  {
    name: 'fedir',
    avatar: 'https://xsgames.co/randomusers/assets/avatars/male/23.jpg',
    userPost: [
      {
        postContent:
          'https://i0.wp.com/www.flutterbeads.com/wp-content/uploads/2022/01/add-image-in-flutter-hero.png?fit=2850%2C1801&ssl=1',
        postSubText: 'Hello world',
        comments: [],
      },
    ],
    subscribers: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
    subscribedTo: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
  },
  {
    name: 'goat',
    avatar: 'https://xsgames.co/randomusers/assets/avatars/male/61.jpg',
    userPost: [
      {
        postContent:
          'https://www.freecodecamp.org/news/content/images/2022/09/jonatan-pie-3l3RwQdHRHg-unsplash.jpg',
        postSubText: 'toys for boys',
        comments: [],
      },
    ],
    subscribers: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
    subscribedTo: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
  },
  {
    name: 'vanya2131',
    avatar: 'https://xsgames.co/randomusers/assets/avatars/male/3.jpg',
    userPost: [
      {
        postContent:
          'https://thumbs.dreamstime.com/b/jardin-japonais-3761801.jpg',
        postSubText: 'beats are nice',
        comments: [],
      },
    ],
    subscribers: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
    subscribedTo: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
  },
  {
    name: 'jessica',
    avatar: 'https://xsgames.co/randomusers/assets/avatars/male/70.jpg',
    userPost: [
      {
        postContent:
          'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
        postSubText: 'hello everyone',
        comments: [],
      },
    ],
    subscribers: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
    subscribedTo: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
  },
  {
    name: 'kroos',
    avatar: 'https://xsgames.co/randomusers/assets/avatars/male/45.jpg',
    userPost: [
      {
        postContent:
          'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png',
        postSubText: 'nothing better',
        comments: [],
      },
    ],
    subscribers: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
    subscribedTo: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
  },
  {
    name: 'nika',
    avatar: 'https://xsgames.co/randomusers/assets/avatars/male/21.jpg',
    userPost: [
      {
        postContent:
          'https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80',
        postSubText: 'thats good',
        comments: [],
      },
    ],
    subscribers: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
    subscribedTo: [
      'bart',
      'anyroast',
      'kroos',
      'jessica',
      'vanya2131',
      'goat',
      'fedir',
      'vasya',
      'misha',
      'anymelon',
      'anyroast',
    ],
  },
]

const SignUp = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(handleUserPosts(usersData))
  }, [])
  return (
    <>
      <Register />
    </>
  )
}

export default SignUp
