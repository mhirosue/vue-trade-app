<?php declare(strict_types=1);

namespace Migrations;

use Doctrine\DBAL\Schema\Schema;
use Doctrine\Migrations\AbstractMigration;

/**
 * Auto-generated Migration: Please modify to your needs!
 */
final class Version20190313144114 extends AbstractMigration
{
    public function up(Schema $schema) : void
    {
        // this up() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE user ADD photo_url VARCHAR(255) DEFAULT NULL, CHANGE date_added date_added DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, CHANGE date_modified date_modified DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, CHANGE membership_expires membership_expires DATETIME NOT NULL, CHANGE activation_expires activation_expires DATETIME NOT NULL');
    }

    public function down(Schema $schema) : void
    {
        // this down() migration is auto-generated, please modify it to your needs
        $this->abortIf($this->connection->getDatabasePlatform()->getName() !== 'mysql', 'Migration can only be executed safely on \'mysql\'.');

        $this->addSql('ALTER TABLE user DROP photo_url, CHANGE date_added date_added DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, CHANGE date_modified date_modified DATETIME DEFAULT CURRENT_TIMESTAMP NOT NULL, CHANGE membership_expires membership_expires DATETIME NOT NULL, CHANGE activation_expires activation_expires DATETIME NOT NULL');
    }
}
