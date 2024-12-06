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
        <div className="image-grid">
      {images.map((image, index) => (
        <a href={image.link} key={index} className="image-grid-item">
          <img src={image.src} alt={`Image ${index + 1}`} />
        </a>
      ))}
    </div>
    );
};

export default Category;