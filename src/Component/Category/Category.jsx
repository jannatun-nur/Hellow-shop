import './category.css'

const Category = () => {

    const images = [
        { src: "../../../public/assets/images/banner.png", link: "/page1" },
        { src: "../../../public/assets/images/banner.png", link: "/page2" },
        { src: "../../../public/assets/images/banner.png", link: "/page3" },
        { src: "../../../public/assets/images/banner.png", link: "/page4" },
        { src: "../../../public/assets/images/banner.png", link: "/page5" },
        { src: "../../../public/assets/images/banner.png", link: "/page6" },
      ];

    return (
        <div className="mt-20">

<p className='lg:text-2xl ml-3 font-bold text-blue-950 py-5'>CATEGORIES</p>

            <div className="image-grid">
      {images.map((image, index) => (
        <a href={image.link} key={index} className="image-grid-item">
          <img src={image.src} alt={`Image ${index + 1}`} />
        </a>
      ))}
    </div>
        </div>
    );
};

export default Category;