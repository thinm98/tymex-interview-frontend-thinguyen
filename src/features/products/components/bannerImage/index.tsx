import { PromoHeroContainer, PromoHeroListPerson, PromoHeroAnnouncement, StyledPersonList } from "./styled";

const BannerImage = () => {
    return (
        <PromoHeroContainer>
            <PromoHeroAnnouncement>
                <img src="/images/new.png" alt="announcement" />
            </PromoHeroAnnouncement>
            <PromoHeroListPerson>
                <StyledPersonList>
                <img src="/images/person1.png" alt="person-1" />
                <img src="/images/person2.png" alt="person-2" />
                <img src="/images/person3.png" alt="person-3" />
                <img src="/images/person4.png" alt="person-4" />
                </StyledPersonList>
            </PromoHeroListPerson>
            <div className="promo-hero-main-person">
                <img className="promo-hero-main-person-img" src="/images/main-person.png" alt="main-person" />
            </div>
        </PromoHeroContainer>
    )
}

export default BannerImage;