Voici la version prête à copier dans ton dépôt GitLab, nomme-la **`GIT_SYNC_GUIDE.md`** :

````md
# 🧭 Guide interne — Synchronisation GitLab ↔ GitHub

> Document privé – à ne **pas** publier sur GitHub  
> Auteur : Bennirah  
> Projet : DevOps API Deploy

---

## 📂 Structure logique

- **GitLab** = dépôt principal (privé, CI/CD réel)  
- **GitHub** = miroir public (portfolio, vitrine)

---

## ⚙️ Configuration initiale

```bash
# Remote GitLab déjà configuré
origin  git@gitlab.com:bennirah/api-ansible.git

# Ajouter le miroir GitHub
git remote add github git@github.com:bennirahh/devops-api-deploy.git
````

---

## 🚀 Cycle de travail complet

### 1️⃣ Développement local

```bash
git checkout public
# modifications
git add -A
git commit -m "feat: mise à jour pipeline"
```

### 2️⃣ Pousser sur GitLab

```bash
git push
```

### 3️⃣ Miroir vers GitHub

```bash
git push github public:main
git push github --tags
```

*(Le `:main` conserve le nom de branche GitHub par défaut.)*

---

## 🧩 Commandes utiles

```bash
git remote -v           # afficher les remotes
git branch -vv          # voir le suivi (upstream)
git status              # état du répertoire
git log --oneline -5    # derniers commits
```

---

## 🔁 Raccourci pratique

```bash
git config alias.publish '!git push && git push github public:main && git push github --tags'
# utilisation :
git publish
```

---

## 🛡️ Bonnes pratiques

* Toujours pousser **d’abord sur GitLab** (source fiable).
* Ne jamais supprimer la branche `public`.
* Protéger `public` et `main` dans GitLab.
* Aucun secret ni clé dans le code GitHub.
* Garder GitHub comme vitrine technique claire.

---

## ⚠️ Dépannage rapide

| Problème                        | Solution                                   |
| ------------------------------- | ------------------------------------------ |
| `no upstream branch`            | `git push --set-upstream origin public`    |
| `Permission denied (publickey)` | Ajouter ta clé SSH sur GitHub / GitLab     |
| `repository not found`          | Vérifie `git remote -v`                    |
| Changer l’URL GitHub            | `git remote set-url github <nouvelle_url>` |

---

## 🧠 Résumé

* **GitLab** → source principale, CI/CD complet.
* **GitHub** → miroir public et vitrine pro.
* **Branche unique :** `public`, poussée sur les deux remotes.

---

```

Ce fichier restera purement interne, versionné uniquement dans ton GitLab.
```
