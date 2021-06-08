
class application {
  constructor() {

  }
}
class UserUtil {
  constructor() {}

  updateID(id) {}
  updateName(name) {}
  updateServer(server) {}
  updateGuildName(name) {}
  updateGuildID(id) {}
}

class HeroUtil {
  constructor() {
    const locale = this.getLanguage();

    this.heroMeta = this.getHeroMetadata(locale).then(data => {
      this.render('heroList', data, 'all-hero-list');
      return data;
    });

    console.log(this.heroMeta);
  }

  getLanguage() {
    // how will languate switching work?
    // const uniqueProps = {
    //   hero: ['active', 'ascension', 'fi', 'si', 'stars'],
    //   guild: ['guildName', 'guildId'],
    //   user: ['crystal', 'id', 'name', 'server', 'tree']
    // };
    return window.afkTestLanguage || 'en';
  }

  async getHeroMetadata(lang) {
    const host = `https://raw.githubusercontent.com/WillHall/afk-hero-metadata/main/metadata_${lang}.json`;
    try {
      const response = await fetch(host, {
        method: 'GET'
      });
      const meta = await response.json();

      return meta;
    } catch (error) {
      console.error(error);
    }
  }

  initDB() {
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    var request = window.indexedDB.open("AFKHero", 3);

  }
  saveDB() {}

  toggleActive(event) {
    console.log('here');
    if (event) {
      event.target.classList.toggle("owned");
  
      // triggered from dom
    } else {
      // trigger programmatically
    }
  }

  activateHero(name) {}

  updateSI(name) {}

  updateFI(name) {}

  updateStars(name) {}
    
  render(tplID, data, target) {
    const template = document.getElementById(tplID).innerHTML;
    if (template) {
      const rendered = Mustache.render(template, data);
      if (rendered && target) {
        document.getElementById(target).innerHTML = rendered;      
      }
    }
  }
}

const user = new UserUtil();
const hero = new HeroUtil();
