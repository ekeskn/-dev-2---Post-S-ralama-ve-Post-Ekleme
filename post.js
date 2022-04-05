const posts = [
    { name: "post1", author: 'Yazar 1' },
    { name: "post2", author: 'Yazar 2' },
    { name: "post3", author: 'Yazar 3' }
];

const listpost = () => {
    posts.map(post => {
        console.log(post)
    })
};

const addPost = (newPost) => {

    const promise1 = new Promise((resolve, reject) => {
        posts.push(newPost);
        resolve(posts);
        reject('Bir hata oluştu')
    })
    return promise1;

};


async function showPosts() {
    try {

        await addPost({ name: "Post5", author: 'Yazar 5' });
        listpost();


    } catch (error) {
        console.log(error)
    }
}

showPosts();
