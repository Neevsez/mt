class GeneralSections {
    Navbar() {
        return (
            <nav class="navbar container">
                <div class="nav-logo">
                    <a href="/" class="nav-logo-link nav-pages-link">
                        <img src="##" alt="logo" />
                    </a>
                </div>
                <div class="nav-panel">
                    <ul class="nav-list">
                        <li class="nav-item">
                            <button class="nav-button">
                                <a href="##" class="nav-pages-link">Тарифы</a>
                            </button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-button">
                                <a href="##" class="nav-pages-link">Инструменты</a>
                            </button>
                        </li>
                        <li class="nav-item">
                            <button class="nav-button">
                                <a href="/about" class="nav-pages-link">О нас</a>
                            </button>
                        </li>
                        <form action="" class="search">
                            <input type="text" placeholder="Поиск" class="search-item" />
                        </form>
                    </ul>
                </div>
                <div class="nav-authorization">
                    <button class="nav-button authorization">Войти</button>
                    <button class="nav-button registration">Регистрация</button>
                </div>
            </nav>
        )
    };

    Footer() {
        return (
            <section class="footer-section">
                <footer class="footer container">
                    <div class="footer-leftside">
                        <img src="##" alt="logo" />
                        <p>Автоматизируйте работу, увеличивайте продажи и используйте передовые решения с помощью вашего сервиса
                        </p>
                    </div>
                    <table class="footer-table">
                        <tbody>
                            <tr class="footer-row">
                                <td class="footer-column">
                                    <button class="footer-button">
                                        <a href="" class="footer-link">Тарифы</a>
                                    </button>
                                </td>
                                <td class="footer-column">
                                    <button class="footer-button">
                                        <a href="" class="footer-link">Сервис</a>
                                    </button>
                                </td>
                                <td class="footer-column last-column">
                                    <button class="footer-button">
                                        <a href="" class="footer-link">Контакты</a>
                                    </button>
                                </td>
                            </tr>
                            <tr class="footer-row">
                                <td class="footer-column">Бесплатная подписка</td>
                                <td class="footer-column">О нас</td>
                                <td class="footer-column last-column">databazaar@gmail.ru</td>
                            </tr>
                            <tr class="footer-row">
                                <td class="footer-column">Платная подписка</td>
                                <td class="footer-column">Инструменты</td>
                                <td class="footer-column last-column">Tg-бот</td>
                            </tr>
                        </tbody>
                    </table>
                </footer>
                <div class="footer-sep"></div>
                <div class="footer-downside container">
                    <p class="footer-downside-item">Пользовательское соглашение</p>
                    <p class="footer-downside-item">Лицензионное соглашение</p>
                </div>
            </section>
        )
    };
};

export default GeneralSections;